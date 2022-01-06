import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent{

  constructor(  private authService: AuthService,
                private router: Router) { }

  get usuario() {
    return this.authService.usuario;
  }

  logout() {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

}
