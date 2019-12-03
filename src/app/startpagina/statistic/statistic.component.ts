import { Component, OnInit, Input } from '@angular/core';
import { Startpagina } from '../models/startpagina.model';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() startpaginaInformatie: Startpagina;

  constructor() { }

  ngOnInit() {
  }

}
