import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAtractivo } from 'src/app/Admin/Models/atractivo';
import { AtractivoService } from 'src/app/Admin/Services/Atractivo/atractivo.service';
import { urlVR } from 'src/environments/environment';

@Component({
  selector: 'app-ruta-mes',
  templateUrl: './ruta-mes.component.html',
  styleUrls: ['./ruta-mes.component.css']
})
export class RutaMesComponent implements OnInit {

  constructor(private router: Router, private service: AtractivoService) { }

  public atractivo: IAtractivo;
  public publicURLVR = urlVR;
  ngOnInit(): void {
    this.service.getDestacadoMes().subscribe(res => {
      this.atractivo = res;
    })
  }

  onClickrutames(event:Event) {
    window.location.href = this.publicURLVR + this.atractivo?.id;
  }
}
