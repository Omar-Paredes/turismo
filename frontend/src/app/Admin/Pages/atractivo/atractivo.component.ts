import { IEmpresa } from './../../Models/empresa';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IAtractivo } from '../../Models/atractivo';
import { ISeccion } from '../../Models/seccion';
import { IActividad } from '../../Models/actividad';
import IAtractivoActividadEstado from '../../Models/atractivoActividadEstado';
import { AtractivoService } from '../../Services/Atractivo/atractivo.service';
import { AccesibilidadService } from './../../Services/Accesibilidad/accesibilidad.service';
import { EstacionalidadService } from './../../Services/Estacionalidad/estacionalidad.service';
import { TipoAtractivoService } from './../../Services/TipoAtractivo/tipo-atractivo.service';
import { UbicacionService } from './../../Services/Ubicacion/ubicacion.service';
// Subida de imagenes
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import getVariousCheck from 'src/utilities/getVariousCheck';
import Swal from 'sweetalert2';
// import { MatSelect } from '@angular/material/select';
import { alertSuccess, alertWarning, alertDelete } from 'src/utilities/alerts';
import AtractivoSeccionesAsignadasType from '../../Models/atractivoSeccionesAsigandas.moldes';
import readFile from 'src/utilities/base64.core';
import { urlVR } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { validarInputFile } from 'src/utilities/validarInputFile';

@Component({
  selector: 'app-atractivo',
  templateUrl: './atractivo.component.html',
  styleUrls: ['./atractivo.component.css'],
})
export class AtractivoComponent implements OnInit {
  //Lista Atractivo
  public atractivos = [] as any;
  loadingData: boolean = true;
  public tipo_atractivos = [] as any;
  public estacionalidades = [] as any;
  public ubicaciones = [] as any;
  public accesibilidades = [] as any;
  // Atractivo Actividad//
  public noAsignados: IActividad[] = [];
  public noAsignadosCheck: IActividad[] = [];

  //Atractivo Empresa//
  public empresaNoAsignados: IEmpresa[] = [];
  public empresaNoAsignadosCheck: IEmpresa[] = [];

  sectionsAssigneds: AtractivoSeccionesAsignadasType[] = [];
  asignedsCheck: any[] = [];

  //Modificar Estado
  estadoSectionsAssigneds: IAtractivoActividadEstado[] = [];
  public estadoActividad = <IAtractivoActividadEstado>{};
  //Elegido para modificar
  public elegida = <IAtractivo>{};
  //Cambiar el titulo y boton segun presionado
  public modalTitle = '';
  public btnTitle = '';

  functionValidate(length: number) {
    return new FormControl('', [
      Validators.required,
      Validators.maxLength(length),
    ]);
  }

  validEmpty() {
    const val = new FormControl('', [Validators.required]);
    return val;
  }

  public nombre = this.functionValidate(50);
  public codigo = this.functionValidate(20);
  public descripcion = this.functionValidate(50000);
  public acompaniantes = this.functionValidate(50);
  public foto = this.validEmpty();
  public imagen = this.validEmpty();
  public video = this.validEmpty();
  public tipo_atractivo_id = this.validEmpty();
  public estacionalidad_id = this.validEmpty();
  public ubicacion_id = this.validEmpty();
  public accesibilidad_id = this.validEmpty();

  //Validacion de los datos
  public errores = false;

  modalRef?: BsModalRef;
  constructor(
    private service: AtractivoService,
    private modalService: BsModalService,
    private service_tipo_atractivo: TipoAtractivoService,
    private service_estacionalidad: EstacionalidadService,
    private service_accesibilidad: AccesibilidadService,
    private service_ubicacion: UbicacionService,
    private toastr: ToastrService
  ) {}

  openModal(template: TemplateRef<any>, atractivo?: IAtractivo) {
    //Modal modificar
    if (atractivo) {
      console.log(atractivo);
      this.modalTitle = 'Editar atractivo';
      this.elegida = atractivo;
      this.btnTitle = 'Editar';

      this.nombre.setValue(atractivo.nombre);
      this.codigo.setValue(atractivo.codigo);
      this.descripcion.setValue(atractivo.descripcion);
      //ASIGNAR FOTO AL MODAL
      this.myFoto = atractivo.foto;
      //ASIGNAR FOTO AL MODAL
      this.myImage = atractivo.imagen;
      //ASIGNAR VIDEO AL MODAL
      this.myVideo = atractivo.video;
      this.acompaniantes.setValue(atractivo.acompaniantes);
      this.tipo_atractivo_id.setValue(atractivo.tipo_atractivo_id);
      this.ubicacion_id.setValue(atractivo.ubicacion_id);
      this.accesibilidad_id.setValue(atractivo.accesibilidad_id);
      this.estacionalidad_id.setValue(atractivo.estacionalidad_id);
    }
    //Modal agregar
    else {
      this.modalTitle = 'Agregar Atractivo';
      this.btnTitle = 'Agregar';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  myFoto: any;
  fileFoto: any;

  //SUBIR FOTO-----------------
  myImage: any;
  fileImagen: any;

  //SUBIR VIDEO---------------
  myVideo: any;
  fileVideo: any;

  onChangeFoto($event: any) {
    if (validarInputFile($event)) {
      this.fileFoto = <File>$event.target.files[0];
      this.convertToBase64Foto(this.fileFoto);
    } else {
      this.myFoto = this.elegida.foto;
    }
  }

  onChange($event: any) {
    if (validarInputFile($event)) {
      this.fileImagen = <File>$event.target.files[0];
      this.convertToBase64(this.fileImagen);
    } else {
      this.myImage = this.elegida.imagen;
    }
  }

  onChangeVideo($event: any) {
    if (validarInputFile($event)) {
      this.fileVideo = <File>$event.target.files[0];
      this.convertToBase64Video(this.fileVideo);
    } else {
      this.myVideo = this.elegida.video;
    }
  }

  convertToBase64Foto(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.myFoto = d;
    });
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.myImage = d;
    });
  }

  convertToBase64Video(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.myVideo = d;
    });
  }

  // ------------------------Atractivos Actividades-------------------------------------------
  loadToModalActividades(atractivo: IAtractivo) {
    //clean the check
    this.noAsignadosCheck = [];
    this.asignedsCheck = [];

    this.nombre.setValue(atractivo.nombre);
    this.codigo.setValue(atractivo.id);
  }
  assignActividadesModal(template: TemplateRef<any>, atractivo: IAtractivo) {
    this.loadToModalActividades(atractivo);
    this.service
      .noAsignados(atractivo?.id)
      .subscribe((response) => (this.noAsignados = response));
    this.modalRef = this.modalService.show(template);
  }

  undoActividadesModal(template: TemplateRef<any>, atractivo: IAtractivo) {
    this.loadToModalActividades(atractivo);
    this.service.getActividadesAssigned(atractivo.id).subscribe((res) => {
      this.sectionsAssigneds = res;
    });
    this.modalRef = this.modalService.show(template);
  }

  estadoActividadesModal(template: TemplateRef<any>, atractivo: IAtractivo) {
    this.loadToModalActividades(atractivo);
    this.listaEstado();
    this.modalRef = this.modalService.show(template);
  }

  listaEstado() {
    this.service.cambiarEstado(this.codigo.value).subscribe((res) => {
      this.estadoSectionsAssigneds = res;
    });
  }

  updateEstado(actividad?: IAtractivoActividadEstado) {
    this.estadoActividad.id = actividad?.id;
    if (actividad?.estado == 'habilitado') {
      this.estadoActividad.estado = 'deshabilitado';
    } else {
      this.estadoActividad.estado = 'habilitado';
    }
    this.service.updateEstado(this.estadoActividad).subscribe((response) => {
      this.listaEstado();
    });
  }

  //Onchange para la lista de secciones no agregadas
  obtenerIdNoAsiggnedCheck($event: any) {
    this.noAsignadosCheck = getVariousCheck<IActividad>(
      $event,
      this.noAsignadosCheck
    );
  }

  obtenerIdAsiggnedCheck($event: any) {
    this.asignedsCheck = getVariousCheck<IActividad>(
      $event,
      this.asignedsCheck
    );
  }

  saveSucceFull() {
    this.getList();
    this.reset();
    this.errores = false;
    this.loadingData = false;
  }

  deallocateActividades() {
    let vec = {
      actividades: this.asignedsCheck,
      id: this.codigo.value,
    };
    this.loadingData = true;
    this.modalRef?.hide();
    this.service
      .deallocateActividades(vec)
      .subscribe((_) => this.saveSucceFull());
  }

  assignActividades() {
    let vec = {
      actividades: this.noAsignadosCheck,
      id: this.codigo.value,
    };
    this.loadingData = true;
    this.modalRef?.hide();
    this.service.addAssigning(vec).subscribe((_) => this.saveSucceFull());
  }

  // ----------------------------------------------------Atractivos Empresas-------------------------------------------
  loadToModalEmpresas(atractivo: IAtractivo) {
    //clean the check
    this.asignedsCheck = [];
    this.empresaNoAsignadosCheck = [];

    this.nombre.setValue(atractivo.nombre);
    this.codigo.setValue(atractivo.id);
  }

  assignEmpresasModal(template: TemplateRef<any>, atractivo: IAtractivo) {
    this.loadToModalEmpresas(atractivo);
    this.service
      .empresasNoAsignados(atractivo?.id)
      .subscribe((response) => (this.empresaNoAsignados = response));
    this.modalRef = this.modalService.show(template);
  }

  undoEmpresasModal(template: TemplateRef<any>, atractivo: IAtractivo) {
    this.loadToModalEmpresas(atractivo);
    this.service.getEmpresasAssigned(atractivo.id).subscribe((res) => {
      this.sectionsAssigneds = res;
    });
    this.modalRef = this.modalService.show(template);
  }

  //Onchange para la lista de secciones no agregadas
  empresaObtenerIdNoAsiggnedCheck($event: any) {
    this.empresaNoAsignadosCheck = getVariousCheck<IEmpresa>(
      $event,
      this.empresaNoAsignadosCheck
    );
  }

  empresaObtenerIdAsiggnedCheck($event: any) {
    this.asignedsCheck = getVariousCheck<IEmpresa>($event, this.asignedsCheck);
  }

  saveSucceFullEmpresa() {
    this.getList();
    this.reset();
    this.errores = false;
    this.loadingData = false;
  }

  deallocateEmpresas() {
    let vec = {
      empresas: this.asignedsCheck,
      id: this.codigo.value,
    };
    this.loadingData = true;
    this.modalRef?.hide();
    this.service
      .deallocateEmpresas(vec)
      .subscribe((_) => this.saveSucceFullEmpresa());
  }

  assignEmpresas() {
    let vec = {
      empresas: this.empresaNoAsignadosCheck,
      id: this.codigo.value,
    };
    this.loadingData = true;
    this.modalRef?.hide();
    this.service
      .empresasAddAssigning(vec)
      .subscribe((_) => this.saveSucceFullEmpresa());
  }

  //----------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe((response) => {
      this.atractivos = response;
      this.loadingData = false;
    });
    this.service_tipo_atractivo
      .list()
      .subscribe((response) => (this.tipo_atractivos = response));

    this.service_estacionalidad
      .list()
      .subscribe((response) => (this.estacionalidades = response));

    this.service_ubicacion
      .list()
      .subscribe((response) => (this.ubicaciones = response));

    this.service_accesibilidad.list().subscribe((response) => {
      this.accesibilidades = response;
    });
  }

  async delete(atractivo: IAtractivo) {
    const res = await alertWarning('¿Esta seguro?');
    if (res.value) {
      this.service.delete(atractivo).subscribe((_) => this.getList());
      alertSuccess('Eliminado Con exito');
    }
  }

  public progressFoto: number = 0;
  public progressImage: number = 0;
  public progressVideo: number = 0;

  async sendCloudinary(val: File, opt: string) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', val);
      formData.append('upload_preset', 'wqazrcl1');

      const req = new XMLHttpRequest();
      req.open('POST', `https://api.cloudinary.com/v1_1/dqu6qcszt/upload`);
      req.upload.addEventListener('progress', (e) => {
        if (opt === 'imagen') {
          this.progressImage = (e.loaded / e.total) * 100;
        } else if (opt === 'video') {
          this.progressVideo = (e.loaded / e.total) * 100;
        } else {
          this.progressFoto = (e.loaded / e.total) * 100;
        }
      });

      req.addEventListener('load', () => {
        resolve(req.response);
      });

      req.send(formData);
    });
  }

  async save() {
    //Validar
    if (
      !this.nombre.value ||
      !this.codigo.value ||
      !this.descripcion.value ||
      (!this.imagen.value && !this.myImage) ||
      (!this.video.value && !this.myVideo) ||
      !this.acompaniantes.value ||
      !this.tipo_atractivo_id.value ||
      !this.estacionalidad_id.value ||
      !this.ubicacion_id.value ||
      !this.accesibilidad_id.value
    ) {
      this.errores = true;
      return;
    }

    if (this.fileFoto) {
      const url: any = await this.sendCloudinary(this.fileFoto, 'foto');
      this.myFoto = JSON.parse(url).url;
    }
    this.progressFoto = 100;
    if (this.fileImagen) {
      const url: any = await this.sendCloudinary(this.fileImagen, 'imagen');
      this.myImage = JSON.parse(url).url;
    }
    this.progressImage = 100;
    if (this.fileVideo) {
      const urlVideo: any = await this.sendCloudinary(this.fileVideo, 'video');
      this.myVideo = JSON.parse(urlVideo).url;
    }
    this.progressVideo = 100;

    this.elegida.nombre = this.nombre.value;
    this.elegida.codigo = this.codigo.value;
    this.elegida.descripcion = this.descripcion.value;
    this.elegida.foto = this.myFoto;
    this.elegida.imagen = this.myImage;
    this.elegida.video = this.myVideo;
    this.elegida.acompaniantes = this.acompaniantes.value;
    this.elegida.tipo_atractivo_id = this.tipo_atractivo_id.value;
    this.elegida.estacionalidad_id = this.estacionalidad_id.value;
    this.elegida.ubicacion_id = this.ubicacion_id.value;
    this.elegida.accesibilidad_id = this.accesibilidad_id.value;

    if (this.btnTitle == 'Editar') {
      this.modalRef?.hide();
      this.service.update(this.elegida).subscribe(async (res) => {
        this.saveSucceFull();
        if (res.id) {
          await alertSuccess('Modificado ' + this.elegida.nombre + ' con éxito');
        } else {
          await alertDelete('Ha ocurrido un error, intentalo mas tarde');
        }
      });

      return;
    }
    this.modalRef?.hide();
    this.service.add(this.elegida).subscribe(async (res) => {
      this.saveSucceFull();
      if (res.id) {
        await alertSuccess('Agregado ' + this.elegida.nombre + ' con éxito');
      } else {
        await alertDelete('Ha ocurrido un error, intentalo mas tarde');
      }
    });
  }

  reset() {
    //RESET FOTO
    this.progressFoto = 0;
    this.progressImage = 0;
    this.progressVideo = 0;
    this.fileFoto = undefined;
    this.fileImagen = undefined;
    this.fileVideo = undefined;
    this.myFoto = undefined;
    this.myImage = undefined;
    this.myVideo = undefined;
    this.nombre.reset();
    this.codigo.reset();
    this.descripcion.reset();
    this.imagen.reset();
    this.video.reset();
    this.acompaniantes.reset();
    this.tipo_atractivo_id.reset();
    this.estacionalidad_id.reset();
    this.ubicacion_id.reset();
    this.accesibilidad_id.reset();
  }

  changeDestacadoMes(atractivo: IAtractivo) {
    this.service.updateDestacadoMes(atractivo).subscribe((res) => {
      if (res.ok) {
        this.getList();
        alertSuccess(`Destacado ${atractivo.nombre} con éxito`);
      }
    });
  }

  navegar(id: number) {
    window.location.href = urlVR + id;
  }
}
