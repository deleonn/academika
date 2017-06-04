import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  currentUser;

  ngOnInit() {
    this.currentUser = this.authService.getLoggedUser();
  }

  logout() {
   this.authService.logout();
   this.router.navigate(['/login']);
 }

}
