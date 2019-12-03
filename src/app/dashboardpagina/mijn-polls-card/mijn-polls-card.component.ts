import { Component, OnInit, Input } from '@angular/core';
import { Poll } from 'src/app/shared/models/poll.model';

@Component({
  selector: 'app-mijn-polls-card',
  templateUrl: './mijn-polls-card.component.html',
  styleUrls: ['./mijn-polls-card.component.scss']
})
export class MijnPollsCardComponent implements OnInit {
  @Input() mijnPolls : Poll[];
  @Input() titel : string;
  @Input() link : string;
  constructor() { }

  ngOnInit() {
  }

}
