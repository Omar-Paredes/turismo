import { Component, OnInit } from '@angular/core';
import { ShowBussinessType } from '../../../Admin/Models/salud';
import { SaludService } from './salud.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css'],
})
export class SaludComponent implements OnInit {
  public data = [] as ShowBussinessType[];

  constructor(private service: SaludService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe((response) => {
      this.data = response;
    });
  }
}
