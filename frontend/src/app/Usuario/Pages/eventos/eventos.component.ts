import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { IAtractivo } from 'src/app/Admin/Models/atractivo';
import { AtractivoService } from 'src/app/Admin/Services/Atractivo/atractivo.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private service: AtractivoService) { }

  dias: string[] = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ]

  public meses: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]

  date: Date = new Date();
  public mesActual: number = this.date.getMonth();
  public events: IAtractivo[];
  public eventosDia: IAtractivo[];

  public text: string;
  public setEventsDia = (eventos: IAtractivo[], dia: dayjs.Dayjs, index: number) => {
    this.text = this.dias[dia.day()] + ", " + dia.format("DD") + " de " + this.meses[Number(dia.format("MM")) - 1];
    this.eventosDia = eventos;
    setTimeout(() => {
      document.getElementById("text")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 50)
  }

  ngOnInit(): void {
    this.service.getEvents().subscribe(res => {
      this.events = res;
    });
  }
}
