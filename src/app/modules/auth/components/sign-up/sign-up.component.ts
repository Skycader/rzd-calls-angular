import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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
    repeatPassword: new FormControl('',[
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
    this.userService.signUp(login, password)
  }

}
