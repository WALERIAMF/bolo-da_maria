import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth-service.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private authService: AuthService) { }


  isAuthenticated() {
    return this.authService.isAuthenticatedUser();
  }

  logout() {
    this.authService.logout();
  }
}