import { Component, OnInit, TemplateRef } from '@angular/core';
import { SeccionService } from '../../Services/Seccion/seccion.service';
import { ISeccion } from '../../Models/seccion';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { FormControl, Validators } from '@angular/forms';

// Subida de imagenes
import { Observable, Subscriber } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  //Lista secciones
 public secciones = [] as any;
  
 //Elegido para modificar
 public elegida = <ISeccion>{};
 
 //Cambiar el titulo y boton segun presionado
 public modalTitle = '';
 public btnTitle = '';

 //Variables seccion
 public nombre = new FormControl('', [Validators.required, Validators.maxLength(50)]);
 public descripcion = new FormControl('', [Validators.required, Validators.maxLength(200)]);
 public foto  = new FormControl('', Validators.required);
 public videos = new FormControl('', Validators.required);
 public links = new FormControl('', [Validators.required, Validators.maxLength(100)]);

 //Validacion
 public errores = false;

 modalRef?: BsModalRef;



 constructor(private service:SeccionService, private modalService: BsModalService) { }

 openModal(template: TemplateRef<any>, seccion?:ISeccion) {

   //Modal modificar
   if (seccion){
     this.modalTitle = 'Editar Seccion';
     this.elegida = seccion;
     this.btnTitle = 'Editar';
     this.nombre.setValue(seccion.nombre);
     this.descripcion.setValue(seccion.descripcion);

     //ASIGNAR FOTO AL MODAL
     this.myImage = seccion.foto;
     //ASIGNAR VIDEO AL MODAL
     this.myVideo = seccion.videos;

     this.links.setValue(seccion.links);

     
   }

   //Modal agregar nueva estacionalidad
   else{
     this.modalTitle = 'Agregar Seccion';
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

    onChange($event: any)  {
      this.fileImagen = <File>$event.target.files[0];
      this.convertToBase64(this.fileImagen);
    }
    onChangeVideo($event: any)  {
      this.fileVideo = <File>$event.target.files[0];
      this.convertToBase64Video(this.fileVideo);
      console.log(this.myVideo);
    }
  
    convertToBase64(file: File) {
      const observable = new Observable((subscriber: Subscriber<any>) => {
        this.readFile(file, subscriber);
      });
      observable.subscribe((d) => {
        this.myImage = d;
      });
    }
    convertToBase64Video(file: File) {
      const observable = new Observable((subscriber: Subscriber<any>) => {
        this.readFile(file, subscriber);
      });
      observable.subscribe((d) => {
        this.myVideo = d;
      });
    }
  
    readFile(file: File, subscriber: Subscriber<any>) {
      const filereader = new FileReader();
      filereader.readAsDataURL(file); 
  
      filereader.onload = () => {
        subscriber.next(filereader.result);
        subscriber.complete();
      }
      filereader.onerror = (error) => {
        subscriber.error(error);
        subscriber.complete();
      }
    }
    //---------------------------------------------------------------


 ngOnInit(): void {
   this.getList();
 }

 getList(){
   this.service.list().subscribe(response => this.secciones = response);
 }

 delete(seccionB:ISeccion){
   
   Swal.fire({
    title: 'Esta seguro?',
    // text: 'This process is irreversible.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.value) {
      this.service.delete(seccionB).subscribe(response => this.getList());
      Swal.fire ({
        title:'Eliminado!', 
        text:'Seccion eliminada.', 
        icon:'success',
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
 }

 save(){
   //Validar
   if (!this.nombre.value || !this.descripcion.value || (!this.foto.value && this.myImage == undefined) || (!this.videos.value && this.myVideo == undefined) || !this.links.value){
     this.errores = true;
     return;
   }

   this.elegida.nombre = this.nombre.value;
   this.elegida.descripcion = this.descripcion.value;
   
   //ASIGNAR VARIABLE FOTO PARA SUBIR
   this.elegida.foto = this.myImage;
   //ASIGNAR VARIABLE VIDEO PARA SUBIR
   this.elegida.videos = this.myVideo;

   this.elegida.links = this.links.value;

   if(this.btnTitle == "Editar")
   {
     this.service.update(this.elegida).subscribe(response =>{ 
       this.getList()
       this.reset();
       this.errores = false;
       this.modalRef?.hide();
     });
     Swal.fire ({
      title:'Modificado con éxito', 
      icon:'success',
      showConfirmButton: false,
      timer: 2000
    });
   }
   else {
     this.service.add(this.elegida).subscribe(response =>{
       this.getList()
       this.reset();
       this.errores = false;
       this.modalRef?.hide();
     });
     Swal.fire ({
      title:'Agregado con éxito', 
      icon:'success',
      showConfirmButton: false,
      timer: 2000
    });
   }
 }

 reset(){

  //RESET FOTO
  this.myImage = undefined;
  this.myVideo = undefined;

   this.nombre.reset();
   this.descripcion.reset();
   this.foto.reset();
   this.videos.reset();
   this.links.reset();
 }

}
