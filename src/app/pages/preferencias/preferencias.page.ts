import { Component } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-preferencias',
  templateUrl: 'preferencias.page.html',
  styleUrls: ['preferencias.page.scss']
})
export class PreferenciasPage {

  constructor(private authService: AuthService) {}

    logout() {
        this.authService.logout();
    }
}
