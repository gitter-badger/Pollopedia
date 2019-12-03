import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { Gebruiker } from 'src/app/shared/models/gebruiker.model';

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.scss']
})
export class RegistrerenComponent implements OnInit {

  model: Gebruiker;
  submitted = false;
  error: {};
  //loginError: string;
  hide =true;

  constructor(private _authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit() {
    this.model =  new Gebruiker(0,"","","",null ,"","");
    this._authenticateService.logout();
  }

  // login submit
  onSubmit() {
    this.submitted = true;

    this._authenticateService.register(this.model).subscribe((data) => {
      if (this._authenticateService.isLoggedIn) {
        const redirect = this._authenticateService.redirectUrl ? this._authenticateService.redirectUrl : '/dashboard'; // redirect url bepalen
        this.router.navigate([redirect]);

        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      } 
    },
      error => this.error = error
    );
  }

}
