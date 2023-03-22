import { Component, OnInit, TemplateRef } from '@angular/core';
import { AccesibilidadService } from '../../Services/Accesibilidad/accesibilidad.service';
import { IAccesibilidad } from '../../Models/accesibilidad';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {
  alertDelete,
  alertSuccess,
  alertUpdate,
  alertWarning,
} from '../../../../utilities/alerts';

@Component({
  selector: 'app-accesibilidad',
  templateUrl: './accesibilidad.component.html',
  styleUrls: ['./accesibilidad.component.css'],
})
export class AccesibilidadComponent implements OnInit {
  //Lista accesibilidad
  public accesibilidades = [] as any;
  loadingData: boolean = true;
  //Elegido para modificar
  public elegida = <IAccesibilidad>{};

  //Cambiar el titulo y boton segun presionado
  public modalTitle = '';
  public btnTitle = '';

  getValidations(length: number) {
    const vec = [Validators.required, Validators.maxLength(length)];
    return new FormControl('', vec);
  }

  //Variables estacionalidad
  public tipo_de_via = this.getValidations(30);
  public estado_de_via = this.getValidations(50);

  //Validacion de los datos
  public errores = false;

  modalRef?: BsModalRef;

  constructor(
    private service: AccesibilidadService,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>, accesibilidad?: IAccesibilidad) {
    //Modal modificar
    if (accesibilidad) {
      this.modalTitle = 'Editar Accesibilidad';
      this.elegida = accesibilidad;
      this.btnTitle = 'Editar';
      this.tipo_de_via.setValue(accesibilidad.tipo_de_via);
      this.estado_de_via.setValue(accesibilidad.estado_de_via);
    }

    //Modal agregar
    else {
      this.modalTitle = 'Agregar Accesibilidad';
      this.btnTitle = 'Agregar';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getList();
  }

  async getList() {
    this.service.list().subscribe((response) => {
      this.accesibilidades = response;
      this.loadingData = false;
    });
  }

  delete(accesibilidad: IAccesibilidad) {
    alertWarning('Esta seguro?').then((result) => {
      if (result.value) {
        this.service.delete(accesibilidad).subscribe(async (response) => {
          this.getList();
          console.log(response);
          if (response) {
            await alertSuccess('Eliminado');
          } else {
            await alertDelete('Ha ocurrido un error');
          }
        });
      }
    });
  }

  async save() {
    //Validar
    if (!this.tipo_de_via.value || !this.estado_de_via.value) {
      this.errores = true;
      return;
    }

    this.elegida.tipo_de_via = this.tipo_de_via.value;
    this.elegida.estado_de_via = this.estado_de_via.value;

    if (this.btnTitle == 'Editar') {
      this.service.update(this.elegida).subscribe(async (response) => {
        this.getList();
        this.reset();
        this.errores = false;
        this.modalRef?.hide();
        if (response.id) {
          await alertUpdate('actualizo con exito');
        } else {
          await alertDelete('Ha ocurrido un error');
        }
      });
    } else {
      this.service.add(this.elegida).subscribe(async (response) => {
        this.getList();
        this.reset();
        this.errores = false;
        this.modalRef?.hide();
        if (response.id) {
          await alertSuccess('Agregado con exito');
        } else {
          await alertDelete('Ha ocurrido un error');
        }
      });
    }
  }

  reset() {
    this.tipo_de_via.reset();
    this.estado_de_via.reset();
  }
}
