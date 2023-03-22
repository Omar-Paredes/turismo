import { Component, OnInit, TemplateRef } from '@angular/core';
import { TipoRestriccionService } from '../../Services/TipoRestriccion/tipo-restriccion.service';
import { ITipoRestriccion } from '../../Models/tipo_restriccion';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { FormControl, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-restriccion',
  templateUrl: './tipo-restriccion.component.html',
  styleUrls: ['./tipo-restriccion.component.css']
})
export class TipoRestriccionComponent implements OnInit {

  //Lista Tipo restriccion
  public tipo_restricciones = [] as any;
  
  //Elegido para modificar
  public elegida = <ITipoRestriccion>{};
  
  //Cambiar el titulo y boton segun presionado
  public modalTitle = '';
  public btnTitle = '';

  //Variables Tipo restriccion
  public nombre = new FormControl('', Validators.required);

  //Validacion de los datos
  public errores = false;

  modalRef?: BsModalRef;


  constructor(private service:TipoRestriccionService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>, tipo_restriccion?:ITipoRestriccion) {

    //Modal modificar
    if (tipo_restriccion){
      this.modalTitle = 'Editar Tipo Restriccion';
      this.elegida =tipo_restriccion;
      this.btnTitle = 'Editar';
      this.nombre.setValue(tipo_restriccion.nombre);
    }

    //Modal agregar
    else{
      this.modalTitle = 'Agregar Tipo Restriccion';
      this.btnTitle = 'Agregar';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.list().subscribe(response => this.tipo_restricciones = response);
  }

  delete(accesibilidad:ITipoRestriccion){

    Swal.fire({
      title: 'Esta seguro?',
      // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.service.delete(accesibilidad).subscribe(response => this.getList());
        Swal.fire ({
          title:'Eliminado!', 
          text:'Tipo Restriccio eliminada.', 
          icon:'success',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }

  save(){
    //Validar
    if (!this.nombre.value){
      this.errores = true;
      return;
    }

    this.elegida.nombre = this.nombre.value;

    if(this.btnTitle == "Editar")
    {
      this.service.update(this.elegida).subscribe(response =>{ 
        this.getList()
        this.reset();
        this.errores = false;
        this.modalRef?.hide();
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
  }

}
