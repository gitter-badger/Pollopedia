import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Gebruiker } from 'src/app/shared/models/gebruiker.model';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { GebruikerLogin } from '../models/gebruiker-login.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

/** @title Input with a custom ErrorStateMatcher */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  myForm: FormGroup;
  model: GebruikerLogin = new GebruikerLogin("", "");
  submitted = false;
  error: {};

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private _authenticateService: AuthenticateService, private router: Router) {
    this.myForm = this.formBuilder.group({
      gebruikersnaam: ['', [Validators.required]],
      email: ['', [Validators.required]],
      wachtwoord: ['', [Validators.required]],
      bevestigWachtwoord: ['']
    }, { validator: this.checkPasswords });

  }
  
  ngOnInit() {
    this._authenticateService.logout();
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.wachtwoord.value;
    let confirmPass = group.controls.bevestigWachtwoord.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  // register submit
  onSubmit() {
    this.submitted = true;
    this._authenticateService.register(this.model).subscribe((data) => {
      if (this._authenticateService.isLoggedIn) {
        const redirect = this._authenticateService.redirectUrl ? this._authenticateService.redirectUrl : '/dashboard'; // redirect url bepalen
        this.router.navigate([redirect]);
      } 
    },
      error => this.error = error
    );
  }
}