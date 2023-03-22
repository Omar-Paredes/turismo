import { Component, OnInit } from '@angular/core';
import { ShowBussinessType } from 'src/app/Admin/Models/salud';
import { TransporteService } from './transporte-page.service';

@Component({
  selector: 'app-transporte-page',
  templateUrl: './transporte-page.component.html',
  styleUrls: ['./transporte-page.component.css'],
})
export class TransportePageComponent implements OnInit {
  public data = [] as ShowBussinessType[];

  constructor(private service: TransporteService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe((response) => {
      this.data = response;
    });
  }
}
