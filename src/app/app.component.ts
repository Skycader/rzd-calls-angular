import { Component, OnInit } from '@angular/core';
import { UserService } from './modules/auth/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rzd-calls';

  constructor(protected userService: UserService) {}
  ngOnInit() {
    
  }
}
