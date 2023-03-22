import { Component, OnInit } from '@angular/core';
import { ShowBussinessType } from 'src/app/Admin/Models/salud';
import { RadioMovilService } from './radio-movil.service';

@Component({
  selector: 'app-radio-movil',
  templateUrl: './radio-movil.component.html',
  styleUrls: ['./radio-movil.component.css'],
})
export class RadioMovilComponent implements OnInit {
  constructor(private service: RadioMovilService) {}

  public data = [] as ShowBussinessType[];

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe((res) => {
      this.data = res;
    });
  }
}
