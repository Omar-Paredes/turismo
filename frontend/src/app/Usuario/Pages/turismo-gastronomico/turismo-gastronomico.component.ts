import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turismo-gastronomico',
  templateUrl: './turismo-gastronomico.component.html',
  styleUrls: ['./turismo-gastronomico.component.css']
})
export class TurismoGastronomicoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickturgastro(event:Event) {
    this.router.navigate(['restaurants']);
  }
}
