import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(private authService: AuthService,
              private routes: Router
  ) { }

  ngOnInit() {
    this.authService.isAuthenticaded().subscribe(isAuthenticated => {
      if (isAuthenticated) { this.routes.navigate(['/app/hospitais']); }
    });
  }

  login(): void {
    this.authService.doGoogleLogin();
  }

}
