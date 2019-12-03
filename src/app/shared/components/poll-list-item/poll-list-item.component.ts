import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../models/poll.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PollDetailDialogComponent } from '../poll-detail-dialog/poll-detail-dialog.component';

@Component({
  selector: 'app-poll-list-item',
  templateUrl: './poll-list-item.component.html',
  styleUrls: ['./poll-list-item.component.scss']
})
export class PollListItemComponent implements OnInit {
  @Input() poll: Poll;
  statusColor: String;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    var statusColors = ["rgb(99, 236, 99)", "rgb(236, 101, 101)", "rgb(252, 252, 103)"];
    this.statusColor = statusColors[this.poll.status]
  }

  openPollDialog(){
    let dialogRef = this.dialog.open(PollDetailDialogComponent, {
      data: { pollID: this.poll.pollID },
    });
  }

}
