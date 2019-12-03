import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';



@NgModule({
  declarations: [
    NavComponent,
    NavigationBarComponent,
    SidenavListComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[ NavComponent ]
})
export class CoreModule { }
