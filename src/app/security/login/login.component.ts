import { Component, OnInit } from '@angular/core';
import { GebruikerLogin } from '../models/gebruiker-login.model';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: GebruikerLogin = new GebruikerLogin("", "");
  submitted = false;
  error: {};
  myForm: FormGroup;
  hide = true;
  //loginError: string;

  constructor(private formBuilder: FormBuilder, private _authenticateService: AuthenticateService, private router: Router) {
    this.myForm = this.formBuilder.group({
      gebruikersnaam: ['', [Validators.required]],
      wachtwoord: ['', [Validators.required]]
    });
   }

  ngOnInit() {
    this._authenticateService.logout();
  }

  // login submit
  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.model).subscribe((data) => {
      if (this._authenticateService.isLoggedIn) {
        const redirect = this._authenticateService.redirectUrl ? this._authenticateService.redirectUrl : '/dashboard'; // redirect url bepalen
        this.router.navigate([redirect]);
      } 
    },
      error => this.error = error
    );
  }
}
