import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/shared/models/poll.model';
import { MijnDeelgenomenPollpaginaService } from '../mijn-deelgenomen-pollpagina.service';

@Component({
  selector: 'app-mijn-deelgenomen-poll-list',
  templateUrl: './mijn-deelgenomen-poll-list.component.html',
  styleUrls: ['./mijn-deelgenomen-poll-list.component.scss']
})
export class MijnDeelgenomenPollListComponent {
  polls: Poll[];

  constructor(private _mijnDeelgenomenpollpaginaService: MijnDeelgenomenPollpaginaService) {
  this._mijnDeelgenomenpollpaginaService.getMijnDeelgenomenPolls().subscribe(
      result => {
        this.polls = result;
      });
  }

}
