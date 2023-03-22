import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './Icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  /**
   * Custom properties
   */
   @Input() height = 500;
   @Input() isFullScreen = false;
   @Input() items: ICarouselItem[] = [];
 
   /**
    * Propiedades finales
    */
 
   public currentPosition = 0;
   public interval: ReturnType<typeof setInterval>;
 
   constructor() {}
 
   ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });

    this.interval = setInterval(() => {
      this.setNext();
    }, 5000);
   }

   ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
 
  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find(i => i.id === 0)!.marginLeft = -100 * position;
    //RESET INTERVAL
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setNext();
    }, 5000);
  }
 
   setNext() {
     let finalPercentage = 0;
     let nextPosition = this.currentPosition + 1;
     if (nextPosition <= this.items.length - 1) {
        finalPercentage = -100 * nextPosition;
     } else {
       nextPosition = 0;
     }
     this.items.find(i => i.id === 0)!.marginLeft = finalPercentage;
     this.currentPosition = nextPosition;
   }
}
