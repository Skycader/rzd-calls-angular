import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signOut',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {
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
