import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MijnDeelgenomenPollListComponent } from './mijn-deelgenomen-poll-list/mijn-deelgenomen-poll-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MijnDeelgenomenPollListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MijnDeelgenomenPollpaginaModule { }
