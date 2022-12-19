import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username: string = ""

  form: FormGroup = new FormGroup({
    login: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
  })

  constructor(protected userService:UserService) {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log("submit event", this.form.value)
    const {login, password } = this.form.value
    this.userService.signIn(login, password)
  }

}
