import { Component, OnInit } from '@angular/core';
import { CafeService } from './pubs.service';
import { ShowBussinessType } from '../../../Admin/Models/salud';

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css'],
})
export class PubsComponent implements OnInit {
  public data = [] as ShowBussinessType[];

  constructor(private service: CafeService) {}

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
