import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../models/poll.model';

@Component({
  selector: 'app-poll-card',
  templateUrl: './poll-card.component.html',
  styleUrls: ['./poll-card.component.scss']
})
export class PollCardComponent implements OnInit {
  @Input() poll: Poll;
  statusColor: String;
  dagenOpen: number;
  constructor() { 
  } 

  ngOnInit() {
    var statusColors = ["rgb(99, 236, 99)", "rgb(236, 101, 101)", "rgb(252, 252, 103)"];
    this.statusColor = statusColors[this.poll.status]
    //this.dagenOpen = this.poll.sluitDatum.getDate() - this.poll.aanmaakDatum.getDate()
  }
}
