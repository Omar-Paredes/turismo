import { Component, OnInit } from '@angular/core';
import { AtractivoService } from 'src/app/Admin/Services/Atractivo/atractivo.service';
import { urlVR } from 'src/environments/environment';
@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  public publicUrlVR = urlVR;
  public atractivos = [] as any;

  constructor(    private service:AtractivoService, ) { }

  ngOnInit(): void {
    this.getList();

  }

  getList(){
    this.service.list().subscribe(response => this.atractivos = response);
  }

}
