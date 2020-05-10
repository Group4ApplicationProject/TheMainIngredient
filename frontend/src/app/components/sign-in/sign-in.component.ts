import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  hide: boolean = true;

  constructor(private apiService: AccountService, 
              private fb: FormBuilder, 
              private router: Router, 
              private userService: UserService, 
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    this.apiService.signIntoAccount(this.signInForm.get('email').value, this.signInForm.get('password').value).subscribe(response => {
      if (JSON.parse(JSON.stringify(response)) != null) {
        this.userService.setAccountId(JSON.parse(JSON.stringify(response['_id'])));
        this.userService.setAccountFirst(JSON.parse(JSON.stringify(response['first'])));
        this.userService.setAccountEmail(JSON.parse(JSON.stringify(response['email'])));
        this.userService.setAccountPassword(JSON.parse(JSON.stringify(response['password'])));
        this.userService.setAccountLoggedIn(true);
        this.router.navigate([`/list`]);
        this.snackBar.open('Welcome back ' + this.userService.getAccountFirst() + '!', 'Dismiss', {duration: 2500, verticalPosition: 'top', panelClass: ['snackBarSucess']});
      } else {
        this.snackBar.open('Error: Invalid login credentials', 'Dismiss', {verticalPosition: 'top', panelClass: ['snackBarError']});
      }
    });
  }

  signUp() {
    this.apiService.signIntoAccount(this.signInForm.get('email').value, this.signInForm.get('password').value).subscribe(response => {
      if (JSON.parse(JSON.stringify(response)) == null) {
        let email = this.signInForm.get('email').value;
        let password = this.signInForm.get('password').value;
        this.router.navigate([`/create-profile/${email}/${password}`]);
      } else {
        this.snackBar.open('Error: This email is already being used', 'Dismiss', { verticalPosition: 'top', panelClass: ['snackBarError'] });
      }
    });
  }

}
