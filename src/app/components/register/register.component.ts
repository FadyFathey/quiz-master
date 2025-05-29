import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log('Social User State in RegisterComponent:', this.user);
      if (this.loggedIn && this.user) {
        console.log(
          'Google ID Token from RegisterComponent:',
          this.user.idToken
        );
        // Example: Send this.user.idToken to your backend
        // this.yourBackendAuthService.registerWithGoogle(this.user.idToken).subscribe(
        //   response => {
        //     console.log('Backend registration successful', response);
        //     this.router.navigate(['/some-dashboard-or-home']);
        //   },
        //   error => {
        //     console.error('Backend registration failed', error);
        //   }
        // );
      }
    });
  }

  signInWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userSocial) => {
        console.log(
          'Google sign-in successful from RegisterComponent, user:',
          userSocial
        );
      })
      .catch((error) => {
        console.error(
          'Error during Google sign-in from RegisterComponent:',
          error
        );
      });
  }

  onRegisterSubmit(): void {
    console.log('Regular register form submitted');
  }
}
