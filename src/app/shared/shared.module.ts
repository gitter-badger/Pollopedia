import { NgModule } from '@angular/core';
import { MatTooltipModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatDividerModule, MatListModule, MatSidenavModule, MatMenuModule, MatToolbarRow, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule, CoreModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { GebruikerListItemComponent } from './components/gebruiker-list-item/gebruiker-list-item.component';
import { PollCardComponent } from './components/poll-card/poll-card.component';
import { StatusPipe } from './pipes/status.pipe';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PollListItemComponent } from './components/poll-list-item/poll-list-item.component';
import { NewestMemberListComponent } from './components/newest-member-list/newest-member-list.component';
import { PollDetailDialogComponent } from './components/poll-detail-dialog/poll-detail-dialog.component';

const SModules = [
  CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  FlexLayoutModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatMenuModule,
  MatTooltipModule,
  CoreModule,
  RouterModule,
  BrowserModule,
  ReactiveFormsModule
]

const SComponents = [
  GebruikerListItemComponent, 
  PollCardComponent, 
  PollListItemComponent,
  NewestMemberListComponent
]
const SPIPES = [
  StatusPipe
];

@NgModule({
  declarations: [ SComponents, SPIPES, PollDetailDialogComponent ],
  imports: [ SModules ],
  exports: [ SModules, SComponents, SPIPES ]
})
export class SharedModule { }
