import { Component, OnInit, Input } from '@angular/core';
import { Verzoek } from 'src/app/shared/models/verzoek.model';
import { DashboardpaginaService } from '../dashboardpagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verzoek-list-item',
  templateUrl: './verzoek-list-item.component.html',
  styleUrls: ['./verzoek-list-item.component.scss']
})
export class VerzoekListItemComponent implements OnInit {
@Input() verzoek : Verzoek;

dashboardpaginaService: DashboardpaginaService;

constructor(private _dashboardpaginaService: DashboardpaginaService, private router: Router) {
  this.dashboardpaginaService = _dashboardpaginaService;
}

  ngOnInit() {
  }

  AcceptVerzoek(verzoekID : number){
    this.dashboardpaginaService.acceptVerzoek(verzoekID);
  }

  DenyVerzoek(verzoekID : number){
    this.dashboardpaginaService.denyVerzoek(verzoekID);
  }

}
