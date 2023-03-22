import { Component, OnInit } from '@angular/core';
import { ComedorService } from './comedores.service';
import { ShowBussinessType } from '../../../Admin/Models/salud';

@Component({
  selector: 'app-comedores',
  templateUrl: './comedores.component.html',
  styleUrls: ['./comedores.component.css'],
})
export class ComedoresComponent implements OnInit {
  constructor(private service: ComedorService) {}

  public data = [] as ShowBussinessType[];

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
