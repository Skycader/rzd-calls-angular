import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/auth/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username = ""
  constructor(protected userService: UserService) {
   }

  ngOnInit(): void {
    
  }

}
