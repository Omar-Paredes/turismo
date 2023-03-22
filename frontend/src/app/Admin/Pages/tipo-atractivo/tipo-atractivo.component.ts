import { Component, OnInit, TemplateRef } from '@angular/core';
import { TipoAtractivoService } from '../../Services/TipoAtractivo/tipo-atractivo.service';
import { ITipoAtractivo } from '../../Models/tipo_atractivo';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { FormControl, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-atractivo',
  templateUrl: './tipo-atractivo.component.html',
  styleUrls: ['./tipo-atractivo.component.css']
})
export class TipoAtractivoComponent implements OnInit {
  loadingData: boolean = true;
  //Lista tipo atractivo
 public t_atractivos = [] as any;
  
 //Elegido para modificar
 public elegida = <ITipoAtractivo>{};
 
 //Cambiar el titulo y boton segun presionado
 public modalTitle = '';
 public btnTitle = '';

 //Variables tipo atractivo
 public nombre = new FormControl('', [Validators.required, Validators.maxLength(50)]);
 public descripcion = new FormControl('', [Validators.required, Validators.maxLength(150)]);

 //Validacion
 public errores = false;

 modalRef?: BsModalRef;



 constructor(private service:TipoAtractivoService, private modalService: BsModalService) { }

 openModal(template: TemplateRef<any>, t_atractivo?:ITipoAtractivo) {

   //Modal modificar
   if (t_atractivo){
     this.modalTitle = 'Editar Tipo Atractivo';
     this.elegida =t_atractivo;
     this.btnTitle = 'Editar';
     this.nombre.setValue(t_atractivo.nombre);
     this.descripcion.setValue(t_atractivo.descripcion);
   }

   //Modal agregar nueva estacionalidad
   else{
     this.modalTitle = 'Agregar Tipo Atractivo';
     this.btnTitle = 'Agregar';
     this.reset();
   }
   this.modalRef = this.modalService.show(template);
 }


 ngOnInit(): void {
   this.getList();
 }

 getList(){
   this.service.list().subscribe(response => {
    this.t_atractivos = response
    this.loadingData = false;
   });
 }

 delete(estacionalidad:ITipoAtractivo){
  Swal.fire({
    title: 'Esta seguro?',
    // text: 'This process is irreversible.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.value) {
      this.service.delete(estacionalidad).subscribe(response => this.getList());
      Swal.fire ({
        title:'Eliminado!', 
        text:'Tipo Atractivo eliminada.', 
        icon:'success',
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
   
 }

 save(){
   //Validar
   if (!this.nombre.value || !this.descripcion.value){
     this.errores = true;
     return;
   }

   this.elegida.nombre = this.nombre.value;
   this.elegida.descripcion = this.descripcion.value;
   
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
   else{
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
   this.nombre.reset();
   this.descripcion.reset();
 }

}
