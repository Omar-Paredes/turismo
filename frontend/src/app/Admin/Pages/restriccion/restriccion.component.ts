import { Component, OnInit, TemplateRef } from '@angular/core';
import { TipoRestriccionService } from '../../Services/TipoRestriccion/tipo-restriccion.service';
import { RestriccionService } from '../../Services/Restriccion/restriccion.service';
import { ITipoRestriccion } from '../../Models/tipo_restriccion';
import { IRestriccion } from '../../Models/restriccion';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { typeWithParameters } from '@angular/compiler/src/render3/util';


@Component({
  selector: 'app-restriccion',
  templateUrl: './restriccion.component.html',
  styleUrls: ['./restriccion.component.css']
})
export class RestriccionComponent implements OnInit {

  //Lista Tipo restriccion
  public tipo_restricciones = [] as any;
  public restricciones = [] as any;

  //Elegido para modificar
  public elegida = <IRestriccion>{};

  //Cambiar el titulo y boton segun presionado
  public modalTitle = '';
  public btnTitle = '';

  //Variables estacionalidad
  public nombre = new FormControl('', Validators.required);
  public tipo_restriccion_id = new FormControl('', Validators.required);

  //Validacion de los datos
  public errores = false;

  modalRef?: BsModalRef;


  constructor(private service:RestriccionService, private modalService: BsModalService, private service_tipo_restriccion:TipoRestriccionService) { }

  openModal(template: TemplateRef<any>, restriccion?:IRestriccion) {

    //Modal modificar
    if (restriccion){
      this.modalTitle = 'Editar Restricción';
      this.elegida =restriccion;
      this.btnTitle = 'Editar';
      this.nombre.setValue(restriccion.nombre);
      this.tipo_restriccion_id.setValue(restriccion.tipo_restriccion_id);
    }

    //Modal agregar
    else{
      this.modalTitle = 'Agregar Restricción';
      this.btnTitle = 'Agregar';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.list().subscribe(response => this.restricciones = response);
    this.service_tipo_restriccion.list().subscribe(response => this.tipo_restricciones = response);

  }

  delete(restriccion:IRestriccion){
    this.service.delete(restriccion).subscribe(response => this.getList());
  }

  save(){
    //Validar
    if (!this.nombre.value || !this.tipo_restriccion_id.value){
      this.errores = true;
      return;
    }

    this.elegida.nombre = this.nombre.value;
    this.elegida.tipo_restriccion_id = this.tipo_restriccion_id.value;

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
    }
  }

  reset(){
    this.nombre.reset();
    this.tipo_restriccion_id.reset();
  }

}
