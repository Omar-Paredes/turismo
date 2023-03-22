import { Component, OnInit, TemplateRef } from '@angular/core';
import { UbicacionService } from '../../Services/Ubicacion/ubicacion.service';
import { IUbicacion } from '../../Models/ubicacion';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
})
export class UbicacionComponent implements OnInit {
  loadingData: boolean = true;
  //Lista ubicacion
  public ubicaciones = [] as any;

  //Elegido para modificar
  public elegida = <IUbicacion>{};

  //Cambiar el titulo y boton segun presionado
  public modalTitle = '';
  public btnTitle = '';

  //Variables estacionalidad
  public informacion = new FormControl('', [
    Validators.required,
    Validators.maxLength(200),
  ]);
  public distrito = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  public calles = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  public altitud = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  public ubicacion_geografica = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
  ]);

  //Validacion de los datos
  public errores = false;

  modalRef?: BsModalRef;

  constructor(
    private service: UbicacionService,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>, ubicacion?: IUbicacion) {
    //Modal modificar
    if (ubicacion) {
      this.modalTitle = 'Editar Ubicacion';
      this.elegida = ubicacion;
      this.btnTitle = 'Editar';
      this.informacion.setValue(ubicacion.informacion);
      this.distrito.setValue(ubicacion.distrito);
      this.calles.setValue(ubicacion.calles);
      this.altitud.setValue(ubicacion.altitud);
      this.ubicacion_geografica.setValue(ubicacion.ubicacion_geografica);
    }

    //Modal agregar
    else {
      this.modalTitle = 'Agregar Ubicacion';
      this.btnTitle = 'Agregar';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe((response) => {
      this.ubicaciones = response;
      this.loadingData = false;
    });
  }

  delete(ubicacion: IUbicacion) {
    Swal.fire({
      title: 'Esta seguro?',
      // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.service.delete(ubicacion).subscribe((response) => this.getList());
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ubicación eliminada.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }

  public errorRegex: boolean = false;

  save() {
    //Validar
    if (
      !this.informacion.value ||
      !this.distrito.value ||
      !this.calles.value ||
      !this.altitud.value ||
      !this.ubicacion_geografica.value
    ) {
      this.errores = true;
      return;
    }

    if (!this.errores) {
      this.elegida.informacion = this.informacion.value;
      this.elegida.distrito = this.distrito.value;
      4;
      this.elegida.calles = this.calles.value;
      this.elegida.altitud = this.altitud.value;
      this.elegida.ubicacion_geografica = this.ubicacion_geografica.value;

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
  }

  reset() {
    this.informacion.reset();
    this.distrito.reset();
    this.calles.reset();
    this.altitud.reset();
    this.ubicacion_geografica.reset();
  }
}
