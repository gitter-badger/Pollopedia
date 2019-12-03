import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikersListComponent } from './gebruikers-list/gebruikers-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [GebruikersListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GebruikerspaginaModule { }
