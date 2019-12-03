import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';
import { SecurityInterceptor } from './security/security.interceptor';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboardpagina/dashboard.module';
import { StartPaginaModule } from './startpagina/startpagina.module';
import { GebruikerspaginaModule } from './gebruikerspagina/gebruikerspagina.module';
import { PollpaginaModule } from './pollpagina/pollpagina.module';
import { MijnPollpaginaModule } from './mijn-pollpagina/mijn-pollpagina.module';
import { MijnDeelgenomenPollpaginaModule } from './mijn-deelgenomen-pollpagina/mijn-deelgenomen-pollpagina.module';
import { UitgenodigdePollpaginaModule } from './uitgenodigde-pollpagina/uitgenodigde-pollpagina.module';
import { VriendenpaginaModule } from './vriendenpagina/vriendenpagina.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    SecurityModule,
    CoreModule,
    DashboardModule,
    StartPaginaModule,
    GebruikerspaginaModule,
    PollpaginaModule,
    MijnPollpaginaModule,
    MijnDeelgenomenPollpaginaModule,
    UitgenodigdePollpaginaModule,
    VriendenpaginaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
