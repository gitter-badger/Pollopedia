import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MijnPollListComponent } from './mijn-poll-list/mijn-poll-list.component';



@NgModule({
  declarations: [MijnPollListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MijnPollpaginaModule { }
