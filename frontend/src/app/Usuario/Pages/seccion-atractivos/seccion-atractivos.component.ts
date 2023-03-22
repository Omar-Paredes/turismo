import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioToUserService } from './seccion.service';
import { urlVR } from 'src/environments/environment';

@Component({
  selector: 'app-seccion-atractivos',
  templateUrl: './seccion-atractivos.component.html',
  styleUrls: ['./seccion-atractivos.component.css'],
})

export class SeccionAtractivosComponent implements OnInit {
  loadingData = true;
  public id: string | null = '';
  public secciones: any;
  public sec: any;
  public publicUrlVR = urlVR;
  constructor(
    private service: ServicioToUserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getList();
  }

  getList() {
    this.service.list(this.id).subscribe((response) => {
      this.secciones = response.atractivos;
      this.sec = response.seccion;
      this.loadingData = false;
    });
  }
}
