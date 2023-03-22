import { IAtractivo } from './../../Models/atractivo';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { SubSeccionService } from '../../Services/SubSeccion/sub-seccion.service';
import { SeccionService } from 'src/app/Admin/Services/Seccion/seccion.service';
import { ISubSeccion } from '../../Models/sub-seccion';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import Swal from 'sweetalert2';
import getVariousCheck from 'src/utilities/getVariousCheck';
import AtractivoSeccionesAsignadasType from '../../Models/atractivoSeccionesAsigandas.moldes';
import { validarInputFile } from 'src/utilities/validarInputFile';
import { alertSuccess, alertDelete, alertUpdate } from 'src/utilities/alerts';

@Component({
  selector: 'app-sub-seccion',
  templateUrl: './sub-seccion.component.html',
  styleUrls: ['./sub-seccion.component.css'],
})
export class SubSeccionComponent implements OnInit {
  //Cargar Página
  loadingData: boolean = true;
  //Lista secciones y subsecciones
  public sub_secciones = [] as any;
  /*   public secciones = [] as any; */
  //Elegido para modificar
  public elegida = <ISubSeccion>{};
  public codigo = this.functionValidate(20);

  //Modales Atractivos SubSecciones
  atractivosAssigneds: AtractivoSeccionesAsignadasType[] = [];
  asignedsCheck: any[] = [];

  public noAsignadosCheck: IAtractivo[] = [];
  public noAsignados: IAtractivo[] = [];

  //Cambiar el titulo y boton segun presionado
  public modalTitle = '';
  public btnTitle = '';

  //Variables seccion
  public id_seccion = new FormControl('', Validators.required);
  public nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  public descripcion = new FormControl('', [
    Validators.required,
    Validators.maxLength(200),
  ]);
  public foto = new FormControl('', Validators.required);
  /*   public videos = new FormControl('', Validators.required); */

  //Validacion
  public errores = false;
  functionValidate(length: number) {
    return new FormControl('', [
      Validators.required,
      Validators.maxLength(length),
    ]);
  }

  modalRef?: BsModalRef;

  constructor(
    private service: SubSeccionService,
    private modalService: BsModalService,
    private service_seccion: SeccionService
  ) {}

  openModal(template: TemplateRef<any>, sub_seccion?: ISubSeccion) {
    //Modal modificar
    if (sub_seccion) {
      this.modalTitle = 'Editar Subseccion';
      this.elegida = sub_seccion;
      this.btnTitle = 'Editar';
      this.nombre.setValue(sub_seccion.nombre);
      this.descripcion.setValue(sub_seccion.descripcion);
      this.id_seccion.setValue(sub_seccion.id_seccion);
      //ASIGNAR FOTO AL MODAL
      this.myImage = sub_seccion.foto;
      //ASIGNAR VIDEO AL MODAL
      this.myVideo = sub_seccion.videos;
    }

    //Modal agregar nueva estacionalidad
    else {
      this.modalTitle = 'Agregar Subseccion';
      this.btnTitle = 'Agregar';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  //SUBIR FOTO-----------------
  myImage: any;
  fileImagen: any;

  //SUBIR VIDEO---------------
  myVideo: any;
  fileVideo: any;

  onChange($event: any) {
    if (validarInputFile($event)) {
      this.fileImagen = <File>$event.target.files[0];
      this.convertToBase64(this.fileImagen);
    } else {
      this.myImage = this.elegida.foto;
    }
  }
  /*   onChangeVideo($event: any) {
    this.fileVideo = <File>$event.target.files[0];
    this.convertToBase64Video(this.fileVideo);
  }
 */
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.myImage = d;
    });
  }
  /*   convertToBase64Video(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.myVideo = d;
    });
  } */

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
      this.sub_secciones = response;
      this.loadingData = false;
    });
    /*     this.service_seccion
      .list()
      .subscribe((response) => (this.secciones = response)); */
  }

  delete(seccionB: ISubSeccion) {
    Swal.fire({
      title: 'Esta seguro?',
      // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.service.delete(seccionB).subscribe((response) => this.getList());
        Swal.fire({
          title: 'Eliminado!',
          text: 'Sub Sección eliminada.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }

  public progress: number = 0;

  async sendCloudinary(val: File) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', val);
      formData.append('upload_preset', 'wqazrcl1');

      const req = new XMLHttpRequest();
      req.open('POST', `https://api.cloudinary.com/v1_1/dqu6qcszt/upload`);
      req.upload.addEventListener('progress', (e) => {
        this.progress = (e.loaded / e.total) * 100;
      });

      req.addEventListener('load', () => {
        resolve(req.response);
      });

      req.send(formData);
    });
  }

  async save() {
    //Validar
    if (
      !this.nombre.value ||
      !this.descripcion.value ||
      (!this.foto.value && this.myImage == undefined)
      /*    || (!this.videos.value && this.myVideo == undefined) */
    ) {
      this.errores = true;
      return;
    }

    if (this.fileImagen) {
      const url: any = await this.sendCloudinary(this.fileImagen);
      this.myImage = JSON.parse(url).url;
    }
    this.progress = 100;

    this.elegida.nombre = this.nombre.value;
    this.elegida.descripcion = this.descripcion.value;

    this.elegida.foto = this.myImage;

    if (this.btnTitle == 'Editar') {
      this.service.update(this.elegida).subscribe(async (response) => {
        this.getList();
        this.reset();
        this.errores = false;
        this.modalRef?.hide();
        if (response.id) {
          await alertUpdate('Modificado ' + this.elegida.nombre + ' con éxito');
        } else {
          await alertDelete('Ha ocurrido un error, intentalo mas tarde');
        }
      });
    } else {
      this.service.add(this.elegida).subscribe(async (response) => {
        this.getList();
        this.reset();
        this.errores = false;
        this.modalRef?.hide();
        if (response.id) {
          await alertSuccess('Agregado ' + this.elegida.nombre + ' con éxito');
        } else {
          await alertDelete('Ha ocurrido un error, intentalo mas tarde');
        }
      });
    }
  }

  reset() {
    //RESET FOTO
    this.progress = 0;
    this.fileImagen = undefined;
    this.myImage = undefined;

    this.nombre.reset();
    this.codigo.reset();
    this.descripcion.reset();
    this.foto.reset();
    /*     this.videos.reset(); */
    this.id_seccion.reset();
  }

  //----------------------------------Agregar Atractivos-----------------

  //Mostrar Atractivos Asignados
  undoAtractivoModal(template: TemplateRef<any>, subseccion: ISubSeccion) {
    this.loadToModalAtractivo(subseccion);
    this.service.getAtractivosAssigned(subseccion.id).subscribe((res) => {
      this.atractivosAssigneds = res;
    });
    this.modalRef = this.modalService.show(template);
  }

  //Mostrar Atractivos No Asignados
  assignAtractivoModal(template: TemplateRef<any>, subseccion: ISubSeccion) {
    this.loadToModalAtractivo(subseccion);
    this.service
      .noAsignados(subseccion?.id)
      .subscribe((response) => (this.noAsignados = response));
    this.modalRef = this.modalService.show(template);
  }

  //Cargar valores en el Modal Atractivos SubSeccion
  loadToModalAtractivo(subseccion: ISubSeccion) {
    //clean the check
    this.noAsignadosCheck = []; //vacia no Asignados
    this.asignedsCheck = []; //vacia Asignados

    this.nombre.setValue(subseccion.nombre);
    this.codigo.setValue(subseccion.id);
  }

  //Onchange para la lista de atractivos no agregadas
  obtenerIdAsiggnedCheck($event: any) {
    this.asignedsCheck = getVariousCheck<IAtractivo>(
      $event,
      this.asignedsCheck
    );
  }

  //Onchange para la lista de atractivos agregadOs
  obtenerIdNoAsiggnedCheck($event: any) {
    this.noAsignadosCheck = getVariousCheck<IAtractivo>(
      $event,
      this.noAsignadosCheck
    );
  }

  //Eliminar atractivos Seleccinados
  deallocateSections() {
    let vec = {
      atractivos: this.asignedsCheck,
      id: this.codigo.value,
    };
    this.loadingData = true;
    this.modalRef?.hide();
    this.service
      .deallocateAtractivos(vec)
      .subscribe((_) => this.saveSucceFull());
  }

  //Agregar atractivos Seleccinados
  assignSecciones() {
    let vec = {
      atractivos: this.noAsignadosCheck,
      id: this.codigo.value,
    };
    this.loadingData = true;
    this.modalRef?.hide();
    this.service
      .addAssigningAtractivos(vec)
      .subscribe((_) => this.saveSucceFull());
  }

  //Guardar Atractivos Seleccionados
  saveSucceFull() {
    this.getList();
    this.reset();
    this.errores = false;
    this.loadingData = false;
  }
}
