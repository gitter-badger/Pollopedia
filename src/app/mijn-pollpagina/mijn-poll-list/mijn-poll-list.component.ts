import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/shared/models/poll.model';
import { MijnPollpaginaService } from '../mijn-pollpagina.service';

@Component({
  selector: 'app-mijn-poll-list',
  templateUrl: './mijn-poll-list.component.html',
  styleUrls: ['./mijn-poll-list.component.scss']
})
export class MijnPollListComponent {

  polls: Poll[];

  constructor(private _mijnPollpaginaService: MijnPollpaginaService) {
  this._mijnPollpaginaService.getMijnPolls().subscribe(
      result => {
        this.polls = result;
      });
  }

}
