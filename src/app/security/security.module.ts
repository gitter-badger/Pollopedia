import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrerenComponent } from './registreren/registreren.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, RegistrerenComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SecurityModule { }
