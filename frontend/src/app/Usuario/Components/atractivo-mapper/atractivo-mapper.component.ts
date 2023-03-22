import { Component, OnInit, Input } from '@angular/core';
import { IAtractivo } from 'src/app/Admin/Models/atractivo';
import { urlVR } from 'src/environments/environment';

@Component({
  selector: 'app-atractivo-mapper',
  templateUrl: './atractivo-mapper.component.html',
  styleUrls: ['./atractivo-mapper.component.css']
})
export class AtractivoMapperComponent implements OnInit {

  constructor() { }

  @Input() atractivos: IAtractivo[];
  public publicUrlVR = urlVR;

  ngOnInit(): void {
  }

}
