import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/modules/auth/services/user.service';
import { LoggingService } from 'src/app/modules/log/services/logging.service';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {

  form: FormGroup = new FormGroup({
    caller: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    type: new FormControl('',[
      Validators.required,
    ]),
  })

  types = [
    'A: Вызов машинист',
    'B: Вызов скорой помощи',
    'C: Вызов МЧС',
    'D: Вызов Полиции'
  ]
  constructor(
    protected userService: UserService,
    protected callService: CallService,
    protected loggingService: LoggingService
    ) {
  }

  ngOnInit(): void {
    window.log = this.loggingService
    console.log(this.loggingService)
  }

  submit() {
    console.log("submit event", this.form.value)
     
  }


}
