import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
 
  constructor(private authService: AuthenticateService) { }
  
  ngOnInit() {
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  
  get isLoggedIn() { return this.authService.isLoggedIn(); }
}
