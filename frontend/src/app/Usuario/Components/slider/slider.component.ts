import { Component, OnInit } from '@angular/core';
import { IAtractivo } from 'src/app/Admin/Models/atractivo';
import { AtractivoService } from 'src/app/Admin/Services/Atractivo/atractivo.service';
import { urlVR } from 'src/environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  constructor(private service: AtractivoService) {}

  public atractivos: IAtractivo[] = [];
  public loading: boolean = true;

  ngOnInit() {
    this.service.getTres().subscribe(res => {
      this.atractivos = res;
      this.loading = false;
    });
  }

  goTo(id: number) {
    window.location.href = urlVR + id;
  }
}
