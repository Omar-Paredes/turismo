import { Component, OnInit, TemplateRef } from '@angular/core';
import { EstacionalidadService } from '../../Services/Estacionalidad/estacionalidad.service';
import { IEstacionalidad } from '../../Models/estacionalidad';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estacionalidad',
  templateUrl: './estacionalidad.component.html',
  styleUrls: ['./estacionalidad.component.css']
})
export class EstacionalidadComponent implements OnInit {

 //Lista estacionalidades
 public estacionalidades = [] as any;
 loadingData = true;
 //Elegido para modificar
 public elegida = <IEstacionalidad>{};
 
 //Cambiar el titulo y boton segun presionado
 public modalTitle = '';
 public btnTitle = '';

 //Variables estacionalidad
 public temporada = new FormControl('', [Validators.required, Validators.maxLength(50)]);
 public horario = new FormControl('');
 public hora_apertura = new FormControl('', Validators.required);
 public hora_cierre = new FormControl('', Validators.required);

 //Validacion
 public errores = false;

 modalRef?: BsModalRef;

 constructor(private service:EstacionalidadService, private modalService: BsModalService) { }

 openModal(template: TemplateRef<any>, estacionalidad?:IEstacionalidad) {

   //Modal modificar
   if (estacionalidad){
     this.modalTitle = 'Editar Estacionalidad';
     this.elegida =estacionalidad;
     this.btnTitle = 'Editar';
     this.temporada.setValue(estacionalidad.temporada);
     this.horario.setValue(estacionalidad.horarios);
     this.hora_apertura.setValue(estacionalidad.hora_apertura);
     this.hora_cierre.setValue(estacionalidad.hora_cierre);
   }

   //Modal agregar nueva estacionalidad
   else{
     this.modalTitle = 'Agregar Estacionalidad';
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
    this.estacionalidades = response;
    this.loadingData = false;
   });
 }

 delete(estacionalidad:IEstacionalidad){
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
        text:'Estacionalidad eliminada.', 
        icon:'success',
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
 }

 save(){
   //Validar
   if (!this.temporada.value || !this.hora_apertura.value || !this.hora_cierre.value){
     this.errores = true;
     return;
   }

   this.elegida.temporada = this.temporada.value;
   this.elegida.horarios = this.horario.value;
   this.elegida.hora_apertura = this.hora_apertura.value;
   this.elegida.hora_cierre = this.hora_cierre.value;

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
   this.temporada.reset();
   this.horario.reset();
   this.hora_apertura.reset();
   this.hora_cierre.reset();
 }

}
