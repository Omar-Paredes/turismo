import { Component, OnInit } from '@angular/core';
import { ShowBussinessType } from 'src/app/Admin/Models/salud';
import { ClinicaService } from './clinicas.service';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.component.html',
  styleUrls: ['./clinicas.component.css'],
})
export class ClinicasComponent implements OnInit {
  constructor(private service: ClinicaService) {}

  ngOnInit(): void {
    this.getList();
  }

  public data = [] as ShowBussinessType[];

  getList() {
    this.service.list().subscribe((res) => {
      this.data = res;
    });
  }
}
