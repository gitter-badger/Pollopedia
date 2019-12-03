import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  gebruiker : Gebruiker;
  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit(){
    this.gebruiker = JSON.parse(localStorage.getItem("gebruiker")) as Gebruiker;
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  get isLoggedIn() { return this.authenticateService.isLoggedIn(); }
}
