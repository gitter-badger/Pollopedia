import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendenpaginaComponent } from './vriendenpagina/vriendenpagina.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VriendenpaginaComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class VriendenpaginaModule { }
