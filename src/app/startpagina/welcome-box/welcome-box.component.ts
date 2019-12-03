import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';

@Component({
  selector: 'app-welcome-box',
  templateUrl: './welcome-box.component.html',
  styleUrls: ['./welcome-box.component.scss']
})
export class WelcomeBoxComponent implements OnInit {
  gebruiker : Gebruiker;

  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {
    this.gebruiker = JSON.parse(localStorage.getItem("gebruiker")) as Gebruiker;
  }
  get isLoggedIn() { return this.authenticateService.isLoggedIn(); }
}
