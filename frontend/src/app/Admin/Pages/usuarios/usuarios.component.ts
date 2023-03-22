import { Component, OnInit, TemplateRef } from '@angular/core';
import { Usuario } from '../../Models/usuario';
import { UsuarioService } from '../../Services/Usuarios/usuario.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { DataService } from '../../Services/InicioSecion/data.service';
import { MustMatch } from 'src/app/confirmed.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  loadingData: boolean = true;
  form!: FormGroup;
  submitted!: boolean;
  data: any;

  //Modificar Estado
  public estado = <Usuario>{};

  //Lista usuarios
  public usuarios = [] as any;
  public localUser: string | null = localStorage.getItem("user");
  public currentUser: any = JSON.parse(this.localUser || '{}');

  modalRef?: BsModalRef;

  constructor(
    private service: UsuarioService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  createForm() {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  get f() {
    return this.form.controls;
  }

  openModal(template: TemplateRef<any>, usuario?: Usuario) {
    this.modalRef = this.modalService.show(template);
    this.createForm();
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe((response) => {
      this.usuarios = response;
      this.loadingData = false;
    });
  }

  cambiarEstado(usuario?: Usuario) {
    this.estado.id = usuario?.id;
    this.estado.estado = !usuario?.estado;
    this.service.updateEstado(this.estado).subscribe((response) => {
      this.getList();
    });
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.dataService.registerUSer(this.form.value).subscribe((res) => {
      this.data = res;
      if (this.data.status == 1) {
        Swal.fire({
          title: 'Usuario Agregado',
          text: this.data.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });
        this.submitted = false;
        this.form.get('email')?.reset();
        this.form.get('password')?.reset();
        this.form.get('confirmPassword')?.reset();
        this.modalRef?.hide();
        this.getList();
      } else {
        Swal.fire({
          title: 'Error',
          text: this.data.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }
}
