import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MijnPollsCardComponent } from './mijn-polls-card/mijn-polls-card.component';
import { SharedModule } from '../shared/shared.module';
import { VerzoekenCardComponent } from './verzoeken-card/verzoeken-card.component';
import { VerzoekListItemComponent } from './verzoek-list-item/verzoek-list-item.component';



@NgModule({
  declarations: [ DashboardComponent, MijnPollsCardComponent, VerzoekenCardComponent, VerzoekListItemComponent ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
