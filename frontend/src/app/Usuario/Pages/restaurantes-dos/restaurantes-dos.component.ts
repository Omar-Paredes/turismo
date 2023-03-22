import { Component, OnInit } from '@angular/core';
import { ShowBussinessType } from 'src/app/Admin/Models/salud';
import { SaludService } from '../salud/salud.service';

@Component({
  selector: 'app-restaurantes-dos',
  templateUrl: './restaurantes-dos.component.html',
  styleUrls: ['./restaurantes-dos.component.css']
})
export class RestaurantesDosComponent implements OnInit {

  constructor(private service: SaludService) { }

  public data: ShowBussinessType[];

  ngOnInit(): void {
    this.service.listRestaurants().subscribe(res => {
      this.data = res;
    });
  }

}
