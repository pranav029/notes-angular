import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Failure, Loading, Success } from 'src/app/data/Resource';
import { AuthService } from 'src/app/data/auth/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage = ''
  isSignInProgress = false
  hide = true
  email = ''
  password = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  getMailErrorMessage() {

  }

  isMailValid(): Boolean {
    return false;
  }

  onSignInClick() {
    this.initiateSign()
  }

  private navigateToHome() {
    this.router.navigate(['/home'])
  }

  private initiateSign() {
    this.authService.signIn(this.email, this.password).subscribe((resource) => {
      if (resource instanceof Loading)
        this.isSignInProgress = true;

      if (resource instanceof Success) {
        this.isSignInProgress = false;
        this.errorMessage = "SignIn sucess!!!";
        this.navigateToHome()
      }

      if (resource instanceof Failure) {
        this.isSignInProgress = false
        this.errorMessage = resource.message
      }
    })
  }
}
