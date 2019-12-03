import { Component, OnInit, Input } from '@angular/core';
import { Verzoek } from 'src/app/shared/models/verzoek.model';

@Component({
  selector: 'app-verzoeken-card',
  templateUrl: './verzoeken-card.component.html',
  styleUrls: ['./verzoeken-card.component.scss']
})
export class VerzoekenCardComponent implements OnInit {
  @Input() verzoeken : Verzoek[];
  constructor() { }

  ngOnInit() {
  }

}
