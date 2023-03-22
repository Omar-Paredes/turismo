import { Component, OnInit } from '@angular/core';
import { PostasService } from './postas.service';
import { ShowBussinessType } from '../../../Admin/Models/salud';

@Component({
  selector: 'app-postas',
  templateUrl: './postas.component.html',
  styleUrls: ['./postas.component.css']
})
export class PostasComponent implements OnInit {

  public data = [] as ShowBussinessType[];

  constructor(private service: PostasService) { }

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
