import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators } from '@angular/forms';

import { IActividad } from '../../Models/actividad';
import { ActividadService } from '../../Services/Actividad/actividad.service';
import { TipoActividadService } from '../../Services/TipoActividad/tipo-actividad.service';

// Subida de imagenes
import { Observable, Subscriber } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css'],
})
export class ActividadComponent implements OnInit {
  //Lista Tipo Actvidad
  public actividades = [] as any;
  loadingData: boolean = true;
  //Elegido para modificar
  public elegida = <IActividad>{};

  //Cambiar el titulo y boton segun presionado
  public modalTitle = '';
  public btnTitle = '';

  //Variables estacionalidad
  public nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  public descripcion = new FormControl('', [
    Validators.required,
    Validators.maxLength(200),
  ]);
  /*   public foto = new FormControl('', [Validators.required]); */

  //Validacion de los datos
  public errores = false;

  modalRef?: BsModalRef;

  constructor(
    private service: ActividadService,
    private serv: TipoActividadService,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>, actividad?: IActividad) {
    //Modal modificar
    if (actividad) {
      this.modalTitle = 'Editar Actividad';
      this.elegida = actividad;
      this.btnTitle = 'Editar';
      this.nombre.setValue(actividad.nombre);
      this.descripcion.setValue(actividad.descripcion);

      //ASIGNAR FOTO AL MODAL
      this.myImage = actividad.foto;
      //ASIGNAR VIDEO AL MODAL
      this.myVideo = actividad.video;
    }

    //Modal agregar
    else {
      this.modalTitle = 'Agregar Actividad';
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
    this.fileImagen = <File>$event.target.files[0];
    this.convertToBase64(this.fileImagen);
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
      this.actividades = response;
      this.loadingData = false;
    });
  }

  delete(actividad: IActividad) {
    Swal.fire({
      title: 'Esta seguro?',
      // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.service.delete(actividad).subscribe((response) => this.getList());
        Swal.fire({
          title: 'Eliminado!',
          text: 'Actividad eliminada.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }

  save() {
    //Validar
    if (
      !this.nombre.value ||
      !this.descripcion.value

      /*       || (!this.foto.value && this.myImage == undefined)  */
    ) {
      this.errores = true;
      return;
    }

    this.elegida.nombre = this.nombre.value;
    this.elegida.descripcion = this.descripcion.value;

    //ASIGNAR VARIABLE FOTO PARA SUBIR
    this.elegida.foto = this.myImage;
    //ASIGNAR VARIABLE VIDEO PARA SUBIR
    this.elegida.video = this.myVideo;

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
    this.myVideo = undefined;

    this.nombre.reset();
    this.descripcion.reset();
/*     this.foto.reset(); */
  }
}
