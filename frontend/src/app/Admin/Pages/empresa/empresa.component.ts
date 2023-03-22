import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subscriber } from 'rxjs';
import Swal from 'sweetalert2';
import { IEmpresa } from '../../Models/empresa';
import { EmpresaService } from '../../Services/Empresa/empresa.service';
import { TipoEmpresaService } from '../../Services/TipoEmpresa/tipo-empresa.service';
import { UbicacionService } from './../../Services/Ubicacion/ubicacion.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  //Lista Tipo Empresa
  public tipo_empresas = [] as any;
  public empresas = [] as any;
  loadingData = true;
  public ubicaciones = [] as any;

  //Elegido para modificar
  public elegida = <IEmpresa>{};

  //Cambiar el titulo y boton segun presionado
  public modalTitle = '';
  public btnTitle = '';

  //Variables estacionalidad
  public nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  public especialidad = new FormControl('', [
    Validators.required,
    Validators.maxLength(200),
  ]);
  public foto = new FormControl('', Validators.required);
  public ubicacion_id = new FormControl('', Validators.required);
  public tipo_empresa_id = new FormControl('', Validators.required);

  //Validacion de los datos
  public errores = false;

  modalRef?: BsModalRef;

  constructor(
    private service: EmpresaService,
    private modalService: BsModalService,
    private serv: TipoEmpresaService,
    private ser_ubi: UbicacionService
  ) {}

  openModal(template: TemplateRef<any>, empresa?: IEmpresa) {
    //Modal modificar
    if (empresa) {
      this.modalTitle = 'Editar Empresa';
      this.btnTitle = 'Editar';

      this.elegida = empresa;
      this.nombre.setValue(empresa.nombre);
      this.especialidad.setValue(empresa.especialidad);

      //ASIGNAR FOTO AL MODAL
      this.myImage = empresa.foto;

      this.ubicacion_id.setValue(empresa.ubicacion_id);
      this.tipo_empresa_id.setValue(empresa.tipo_empresa_id);
    }

    //Modal agregar
    else {
      this.modalTitle = 'Agregar Empresa';
      this.btnTitle = 'Agregar';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  //SUBIR FOTO-------------------------------------------------------
  myImage: any;
  file: any;

  onChange($event: any) {
    this.file = <File>$event.target.files[0];
    this.convertToBase64(this.file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.myImage = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  //---------------------------------------------------------------

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe((response) => {
      this.empresas = response;
      this.loadingData = false;
    });
    this.serv.list().subscribe((response) => (this.tipo_empresas = response));
    this.ser_ubi.list().subscribe((response) => (this.ubicaciones = response));
  }

  delete(empresa: IEmpresa) {
    Swal.fire({
      title: 'Esta seguro?',
      // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.service.delete(empresa).subscribe((response) => this.getList());
        Swal.fire({
          title: 'Eliminado!',
          text: 'Empresa eliminada.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }

  save() {
    //Validar
    //VALIDAR LA FOTO ES DIFERENTE
    if (
      !this.nombre.value ||
      !this.especialidad.value ||
      (!this.foto.value && this.myImage == undefined) ||
      !this.ubicacion_id.value ||
      !this.tipo_empresa_id.value
    ) {
      this.errores = true;
      return;
    }

    this.elegida.nombre = this.nombre.value;
    this.elegida.especialidad = this.especialidad.value;

    //ASIGNAR VARIABLE FOTO PARA SUBIR
    this.elegida.foto = this.myImage;

    this.elegida.ubicacion_id = this.ubicacion_id.value;
    this.elegida.tipo_empresa_id = this.tipo_empresa_id.value;

    if (this.btnTitle == 'Editar') {
      this.service.update(this.elegida).subscribe((response) => {
        this.getList();
        this.reset();
        this.errores = false;
        this.modalRef?.hide();
      });
      Swal.fire({
        title: 'Modificado con éxito',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      this.service.add(this.elegida).subscribe((response) => {
        this.getList();
        this.reset();
        this.errores = false;
        this.modalRef?.hide();
      });
      Swal.fire({
        title: 'Agregado con éxito',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  reset() {
    //RESET FOTO
    this.myImage = undefined;

    this.nombre.reset();
    this.especialidad.reset();
    this.foto.reset();
    this.ubicacion_id.reset();
    this.tipo_empresa_id.reset();
  }
}
