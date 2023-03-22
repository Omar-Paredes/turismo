import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private rederer2: Renderer2) {
    this.getScreenSize();
  }

  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    /*     this.screenHeight = window.innerHeight; */
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {}

  @ViewChild('iconBuger') iconBugerInTs: ElementRef;
  @ViewChild('contentNav') contentNavInTs: ElementRef;
  @ViewChild('sideBar') sideBarInTs: ElementRef;
  @ViewChild('iconXBuger') iconXBugerInTs: ElementRef;
  @ViewChild('header') headerInTs: ElementRef;
  @ViewChild('navbar') navbarInTs: ElementRef;

  openNavigation: boolean = true;

  stateBurger() {
    const iconBurger = this.iconBugerInTs.nativeElement;
    const contentNav = this.contentNavInTs.nativeElement;
    const sideBar = this.sideBarInTs.nativeElement;
    const iconXBuger = this.iconXBugerInTs.nativeElement;
    const header = this.headerInTs.nativeElement;
    const navbar = this.navbarInTs.nativeElement;
    if (this.openNavigation) {
      this.rederer2.setStyle(iconBurger, 'display', 'none');
      this.rederer2.addClass(contentNav, 'showContenteNav');
      this.rederer2.setStyle(sideBar, 'display', 'none');
      this.rederer2.addClass(iconXBuger, 'showX');
      //delete paddings and margin
      this.rederer2.setStyle(header, 'padding-left', '0px');
      /*       this.rederer2.setStyle(header, 'padding-right', '0px');
      this.rederer2.setStyle(navbar, 'padding-right', '0px'); */
      this.rederer2.setStyle(navbar, 'padding-left', '0px');
    } else {
      this.rederer2.setStyle(iconBurger, 'display', 'block');
      this.rederer2.removeClass(contentNav, 'showContenteNav');
      this.rederer2.setStyle(sideBar, 'display', 'block');
      this.rederer2.removeClass(iconXBuger, 'showX');
      //delete paddings and margin
      this.rederer2.setStyle(header, 'padding-left', '24px');
      /*       this.rederer2.setStyle(header, 'padding-right', '24px');
      this.rederer2.setStyle(navbar, 'padding-right', '24px'); */
      this.rederer2.setStyle(navbar, 'padding-left', '24px');
    }


    this.openNavigation = !this.openNavigation;
  }

  onClickal(event: Event): void {
    this.router.navigate(['alimentacion']);
  }
  onClickinfo(event: Event): void {
    this.router.navigate(['info_turistica']);
  }
  onClicktrans(event: Event): void {
    this.router.navigate(['transporte']);
  }
  onClicksalud(event: Event): void {
    this.router.navigate(['salud']);
  }
  onClickser(event: Event): void {
    this.router.navigate(['servicios']);
  }

  openMenu() {
    let hamburgerMenu = document
      .getElementsByClassName('hamburger-menu')
      .item(0) as HTMLElement;
    let nav = document.getElementsByClassName('nav').item(0) as HTMLElement;

    hamburgerMenu.classList.toggle('hamburger-menu--open');
    nav.classList.toggle('nav--open');
  }
}
