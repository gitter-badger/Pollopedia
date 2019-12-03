import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UitgenodigdePollListComponent } from './uitgenodigde-poll-list/uitgenodigde-poll-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UitgenodigdePollListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UitgenodigdePollpaginaModule { }
