import {Component} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {User} from 'firebase';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  user: User;

  constructor(private authService: AuthService) {
    this.authService.currentUser().subscribe(user => this.user = user);
  }

}
