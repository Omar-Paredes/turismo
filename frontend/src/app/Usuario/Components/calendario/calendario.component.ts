import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { IAtractivo } from 'src/app/Admin/Models/atractivo';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {

  constructor() { }

  public arrayDias: dayjs.Dayjs[][] = [];

  @Input() mes: number;
  @Input() color: string;
  @Input() events: IAtractivo[];
  @Input() setEventsDia: (eventos: IAtractivo[], dia: dayjs.Dayjs, index: number) => void;

  public names: string[] = [
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

  getMes = (mes: number) => {
    const year = dayjs().year();
    const primerDiaDelMes = dayjs(new Date(year, mes, 1)).day();
    let diaActual = 0 - primerDiaDelMes;
    const dias = new Array(6).fill([]).map(() => {
      return new Array(7).fill(null).map(() => {
        diaActual++;
        return dayjs(new Date(year, mes, diaActual));
      });
    });

    return dias;
  };

  public comprobarMesActual = (mes: string) => {
    const numberMes: number = Number(mes);
    if (this.mes % 12 < 0) {
      if (numberMes - 1 == (this.mes % 12) + 12) {
        return true;
      }
    } else if (numberMes - 1 == this.mes % 12) {
      return true;
    }
    return false;
  };

  public eventosEsteDia = (dia: string): IAtractivo[] => {
    return this.events?.filter(event => event.fecha === dia);
  }

  public handleClick = (dia: dayjs.Dayjs, index: number) => {
    if(this.eventosEsteDia(dia.format("YYYY-MM-DD")).length) {
      const eventos = this.events?.filter(event => event.fecha === dia.format("YYYY-MM-DD"));
      this.setEventsDia(eventos, dia, index);
    }
  }

  ngOnInit(): void {
    this.arrayDias = this.getMes(this.mes);
  }
}
