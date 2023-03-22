import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infortur-page',
  templateUrl: './infortur-page.component.html',
  styleUrls: ['./infortur-page.component.css'],
})
export class InforturPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickhistoria(event: Event) {
    this.router.navigate(['historia']);
  }
}
