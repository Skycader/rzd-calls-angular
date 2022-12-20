import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILogData } from 'src/app/modules/log/models/log';
import { LoggingService } from 'src/app/modules/log/services/logging.service';

@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.scss'],
})
export class EditLogComponent implements OnInit {
  picker: any;

  types: string[] = [
    'A: Вызов машинист',
    'B: Вызов скорой помощи',
    'C: Вызов МЧС',
    'D: Вызов Полиции',
  ];

  form: FormGroup = new FormGroup({
    caller: new FormControl(this.data.caller, [
      Validators.required,
      Validators.minLength(3),
    ]),
    begining: new FormControl(new Date(this.data.begining), [
      Validators.required,
      Validators.minLength(3),
    ]),
    ending: new FormControl(new Date(this.data.ending), [
      Validators.required,
      Validators.minLength(3),
    ]),
    type: new FormControl(this.getType(this.data.type), [
      Validators.required,
    ]),
    duration: new FormControl(this.data.duration, [
      Validators.required,
    ]),
  });
  selected = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ILogData,
    protected loggingService: LoggingService
  ) {}

  getType(letter: string) {
    return this.types.filter((item) => item[0] == letter)[0];
  }
  ngOnInit() {
    console.log(this.data);
  }


  dropItem() {
    if (this.data.id) this.loggingService.removeLog(this.data.id);

    this.loggingService.renderLog();
  }

  submit() { //save log
    console.log(this.form.value);
    this.form.value.type = this.form.value.type[0] //taking only the first letter 
    if (this.data.id)
    this.loggingService.editLog(this.data.id,this.form.value)
    this.loggingService.renderLog()
  }
}
