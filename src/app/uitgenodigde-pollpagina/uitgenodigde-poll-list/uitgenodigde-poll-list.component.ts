import { Component, OnInit } from '@angular/core';
import { UitgenodigdePollpaginaService } from '../uitgenodigde-pollpagina.service';
import { Poll } from 'src/app/shared/models/poll.model';

@Component({
  selector: 'app-uitgenodigde-poll-list',
  templateUrl: './uitgenodigde-poll-list.component.html',
  styleUrls: ['./uitgenodigde-poll-list.component.scss']
})
export class UitgenodigdePollListComponent {
  polls: Poll[];

  constructor(private _pollpaginaService: UitgenodigdePollpaginaService) {
  this._pollpaginaService.getPolls().subscribe(
      result => {
        this.polls = result;
      });
  }

}
