import { Component, OnInit } from '@angular/core';
import { PollpaginaService } from '../pollpagina.service';
import { Poll } from 'src/app/shared/models/poll.model';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent {

  polls: Poll[];

  constructor(private _pollpaginaService: PollpaginaService) {
  this._pollpaginaService.getPolls().subscribe(
      result => {
        this.polls = result;
      });
  }
}
