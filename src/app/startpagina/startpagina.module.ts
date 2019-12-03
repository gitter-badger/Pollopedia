import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeBoxComponent } from './welcome-box/welcome-box.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
      HomeComponent,
      StatisticComponent,
      WelcomeBoxComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[HomeComponent]
})
export class StartPaginaModule { }