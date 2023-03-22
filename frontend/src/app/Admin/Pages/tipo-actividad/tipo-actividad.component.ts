import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TipoActividadService } from '../../Services/TipoActividad/tipo-actividad.service';
import { ITipoActividad } from '../../Models/tipo_actividad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-actividad',
  templateUrl: './tipo-actividad.component.html',
  styleUrls: ['./tipo-actividad.component.css']
})
export class TipoActividadComponent implements OnInit {

  public tipos = [] as any;
  public selectedTipo = <ITipoActividad>{};
  public modalTitle = '';
  public btnTitle = '';
  public tipo_actividad = new FormControl('',[Validators.required, Validators.maxLength(50)]);
  public showError = false;
  modalRef?:BsModalRef;

  constructor(private service:TipoActividadService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>,tipo?:ITipoActividad){
    if(tipo){
      this.modalTitle = 'Editar Tipo de Actividad';
      this.btnTitle = 'Modificar';
      this.selectedTipo =tipo
      this.tipo_actividad.setValue(tipo.tipo);
    }
    else{
      this.modalTitle = 'Añadir Tipos de Actividades';
      this.btnTitle = 'Guardar';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.list().subscribe(responce => this.tipos = responce);
  }
  delete(tipo:ITipoActividad){
    
    Swal.fire({
      title: 'Esta seguro?',
      // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.service.delete(tipo).subscribe(response => this.getList());
        Swal.fire ({
          title:'Eliminado!', 
          text:'Tipo Actividad eliminada.', 
          icon:'success',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }

  guardar(){
    if(!this.tipo_actividad.value){
      this.showError = true;
      return;
    }
    this.selectedTipo.tipo = this.tipo_actividad.value;
  
    if(this.btnTitle == 'Modificar'){
      this.service.update(this.selectedTipo)
        .subscribe(response=>{
          this.getList();
          this.reset();
          this.showError = false;
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
      this.service.add(this.selectedTipo)
        .subscribe(response=>{
          this.getList();
          this.reset();
          this.showError = false;
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
    this.tipo_actividad.reset();
  }

}
