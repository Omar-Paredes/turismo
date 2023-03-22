import { Component, OnInit } from '@angular/core';
import { IActividad } from 'src/app/Admin/Models/actividad';
import { QueHacerService } from './que-hacer.service';

@Component({
  selector: 'app-que-hacer',
  templateUrl: './que-hacer.component.html',
  styleUrls: ['./que-hacer.component.css']
})
export class QueHacerComponent implements OnInit {

  constructor(private queHacerService: QueHacerService) { }

  public data: IActividad[] = [];

  ngOnInit(): void {
    this.queHacerService.list().subscribe(res => {
      this.data = res;
    });
  }
}
