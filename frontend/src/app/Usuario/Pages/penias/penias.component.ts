import { Component, OnInit } from '@angular/core';
import { PeniasService } from './penias.service';
import { ShowBussinessType } from '../../../Admin/Models/salud';

@Component({
  selector: 'app-penias',
  templateUrl: './penias.component.html',
  styleUrls: ['./penias.component.css']
})
export class PeniasComponent implements OnInit {

  public data = [] as ShowBussinessType[];

  constructor(private service: PeniasService) {}

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
