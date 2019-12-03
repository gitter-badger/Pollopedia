import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './startpagina/home.component';
import { LoginComponent } from './security/login/login.component';
import { DashboardComponent } from './dashboardpagina/dashboard.component';
import { AuthGuard } from './security/guards/auth.guard';
import { GebruikersListComponent } from './gebruikerspagina/gebruikers-list/gebruikers-list.component';
import { RegisterComponent } from './security/register/register.component';
import { PollListComponent } from './pollpagina/poll-list/poll-list.component';
import { MijnPollListComponent } from './mijn-pollpagina/mijn-poll-list/mijn-poll-list.component';
import { MijnDeelgenomenPollListComponent } from './mijn-deelgenomen-pollpagina/mijn-deelgenomen-poll-list/mijn-deelgenomen-poll-list.component';
import { UitgenodigdePollListComponent } from './uitgenodigde-pollpagina/uitgenodigde-poll-list/uitgenodigde-poll-list.component';
import { VriendenpaginaComponent } from './vriendenpagina/vriendenpagina/vriendenpagina.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registreren', component: RegisterComponent},
  {path: 'mijnPolls', component: MijnPollListComponent, canActivate: [AuthGuard]},
  {path: 'vrienden', component: VriendenpaginaComponent, canActivate: [AuthGuard]},
  {path: 'uitgenodigdenPolls', component: UitgenodigdePollListComponent, canActivate: [AuthGuard]},
  {path: 'mijnDeelgenomenPolls', component: MijnDeelgenomenPollListComponent, canActivate: [AuthGuard]},
  {path: 'polls', component: PollListComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'gebruikers', component: GebruikersListComponent, canActivate: [AuthGuard]},
  // Homepage doorverwijzen naar home
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // Niet gedefinieerde routes ook doorverwijzen. Zoniet krijg je fouten in de console!
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
