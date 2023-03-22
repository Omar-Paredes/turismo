import { Component, OnInit } from '@angular/core';
import { ShowBussinessType } from 'src/app/Admin/Models/salud';
import { HospitalesService } from './hospitales.service';


@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  public data = [] as ShowBussinessType[];

  constructor(private service: HospitalesService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
