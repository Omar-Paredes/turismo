import { Component, OnInit } from '@angular/core';
import { ShowBussinessType } from 'src/app/Admin/Models/salud';
import { ServicioService } from './servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public data = [] as ShowBussinessType[];

  constructor(private service: ServicioService) {}


  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.service.list().subscribe((response) => {
      this.data = response;
    });
  }

}
