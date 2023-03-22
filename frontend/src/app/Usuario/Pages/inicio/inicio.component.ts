import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/constants/carousel.const';
import { ICarouselItem } from '../../Components/carousel/Icarousel-item.metadata';

@Component({
  selector: ' ',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
