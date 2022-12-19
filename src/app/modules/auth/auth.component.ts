import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/modules/auth/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username: string = ""

  form: FormGroup = new FormGroup({
    login: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    repeatPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
  })

  constructor(protected userService:UserService) {
  }

  ngOnInit(): void {
  
  }

  submit() {
    console.log("submit event", this.form.value)

  }

}
