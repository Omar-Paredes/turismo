import { Component, OnInit, TemplateRef } from '@angular/core';
import { TipoEmpresaService } from '../../Services/TipoEmpresa/tipo-empresa.service';
import { ITipoEmpresa } from '../../Models/tipo_empresa';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { FormControl, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-empresa',
  templateUrl: './tipo-empresa.component.html',
  styleUrls: ['./tipo-empresa.component.css']
})
export class TipoEmpresaComponent implements OnInit {

   //Lista Tipo Empresa
   public tipo_empresas = [] as any;
  
   //Elegido para modificar
   public elegida = <ITipoEmpresa>{};
   
   //Cambiar el titulo y boton segun presionado
   public modalTitle = '';
   public btnTitle = '';
 
   //Variables estacionalidad
   public nombre = new FormControl('', [Validators.required, Validators.maxLength(50)]);
   public servicio = new FormControl('', [Validators.required, Validators.maxLength(100)]);
   public descripcion = new FormControl('', [Validators.required, Validators.maxLength(200)]);
 
   //Validacion de los datos
   public errores = false;
 
   modalRef?: BsModalRef;
 

   constructor(private service:TipoEmpresaService, private modalService: BsModalService) { }
 
   openModal(template: TemplateRef<any>, tipo_empresa?:ITipoEmpresa) {
 
     //Modal modificar
     if (tipo_empresa){
       this.modalTitle = 'Editar Tipo Empresa';
       this.elegida =tipo_empresa;
       this.btnTitle = 'Editar';
       this.nombre.setValue(tipo_empresa.nombre);
       this.servicio.setValue(tipo_empresa.servicio);
       this.descripcion.setValue(tipo_empresa.descripcion);
     }
 
     //Modal agregar
     else{
       this.modalTitle = 'Agregar Tipo Empresa';
       this.btnTitle = 'Agregar';
       this.reset();
     }
     this.modalRef = this.modalService.show(template);
   }
 
 
   ngOnInit(): void {
     this.getList();
   }
 
   getList(){
     this.service.list().subscribe(response => this.tipo_empresas = response);
     console.log(this.tipo_empresas);
   }
 
   delete(tipo_empresa:ITipoEmpresa){
    Swal.fire({
      title: 'Esta seguro?',
      // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.service.delete(tipo_empresa).subscribe(response => this.getList());
        Swal.fire ({
          title:'Eliminado!', 
          text:'Tipo de Empresa eliminado.', 
          icon:'success',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
   }
 
   save(){
     //Validar
     if (!this.nombre.value || !this.servicio.value || !this.descripcion.value){
       this.errores = true;
       return;
     }
 
     this.elegida.nombre = this.nombre.value;
     this.elegida.servicio = this.servicio.value;4
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
     this.servicio.reset();
     this.descripcion.reset();
   }

}
