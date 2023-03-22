import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../Services/InicioSecion/data.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  submitted! : boolean;
  data: any;
  token:any;

  constructor(
    private formBuilder:FormBuilder,
    private dataService: DataService, 
    private toastr: ToastrService, 
    private router: Router
    ) { }

  loginForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginForm();
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted = true;

    if(this.form.invalid){
      return;
    }
    this.dataService.login(this.form.value).subscribe(res=>{
      this.data = res;
   
      if(this.data[0]?.status === 1) {
        this.token = this.data[0].data.token;
        localStorage.setItem('token', this.token);
        localStorage.setItem('user', JSON.stringify(this.data[1]));
        this.router.navigate(['/admin/accesibilidad']);
        Swal.fire ({
          title: 'Sessión Iniciada', 
          text: this.data[0].message, 
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        });
      }
      else {
        Swal.fire ({
          title: 'Error', 
          text: this.data.message, 
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }

}
