import { Component, OnInit, Input } from '@angular/core';
import { Gebruiker } from 'src/app/shared/models/gebruiker.model';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-newest-member-list',
  templateUrl: './newest-member-list.component.html',
  styleUrls: ['./newest-member-list.component.scss']
})
export class NewestMemberListComponent implements OnInit {
  @Input() gebruikers: Gebruiker[];
  @Input() titel: string;
  @Input() link: string;
  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {
  }

  get isLoggedIn() { return this.authenticateService.isLoggedIn(); }
}
