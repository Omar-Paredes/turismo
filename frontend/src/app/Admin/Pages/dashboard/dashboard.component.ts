import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  token: any;
  userData: any;
  email: any;
  user_id: any;
  openNavigation: boolean = true;

  @ViewChild('navigationLeft') navigationLeftInTs: ElementRef;
  @ViewChild('navigatioRight') navigatioRightInTs: ElementRef;

  constructor(
    private router: Router,
    private rederer2: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email;
    this.user_id = this.userData.user_id;
  }

  logout() {
    Swal.fire({
      title: 'Esta seguro de cerrar la sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SI',
      cancelButtonText: 'NO',
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      }
    });
  }

  stateBurger() {
    const navigationLeft = this.navigationLeftInTs.nativeElement;
    const navigatioRight = this.navigatioRightInTs.nativeElement;
    if (this.openNavigation) {
      this.rederer2.addClass(navigatioRight, 'no-show-right-main');
    } else {
      this.rederer2.setStyle(navigationLeft, 'display', 'block');
      this.rederer2.removeClass(navigatioRight, 'no-show-right-main');
    }
    this.openNavigation = !this.openNavigation;
  }
}
