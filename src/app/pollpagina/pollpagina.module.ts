import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollListComponent } from './poll-list/poll-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PollListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PollpaginaModule { }
