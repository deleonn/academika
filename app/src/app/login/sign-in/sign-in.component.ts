import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router }      from '@angular/router';

@Component({
  selector: 'SignInComponent',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login() {
   this.authService.login().subscribe(() => {
     if (this.authService.isLoggedIn) {
       // Get the redirect URL from our auth service
       // If no redirect has been set, use the default
       let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/materias';
       // Redirect the user
       this.router.navigate([redirect]);
     }
   });
 }

}
