import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { ILogData } from 'src/app/modules/log/models/log';
import { LoggingService } from 'src/app/modules/log/services/logging.service';

@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.scss'],
})
export class EditLogComponent implements OnInit {
  types: string[] = [
    'A: Вызов машиниста',
    'B: Вызов скорой помощи',
    'C: Вызов МЧС',
    'D: Вызов Полиции',
  ];

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#fff',
      buttonColor: '#673ab7',
    },
    dial: {
      dialBackgroundColor: '#673ab7',
    },
    clockFace: {
      clockFaceBackgroundColor: '#673ab7',
      clockHandColor: '#ffd740',
      clockFaceTimeInactiveColor: '#fff',
    },
  };

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
    type: new FormControl(this.getType(this.data.type), [Validators.required]),
    duration: new FormControl(this.data.duration, [Validators.required]),
    beginingTime: new FormControl(
      new Date(this.data.begining).getHours() +
        ':' +
        new Date(this.data.begining).getMinutes(),
      [Validators.required]
    ),
    endingTime: new FormControl(
      new Date(this.data.ending).getHours() +
        ':' +
        new Date(this.data.ending).getMinutes(),
      [Validators.required]
    ),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ILogData,
    protected loggingService: LoggingService
  ) {}

  @ViewChild('beginingTimeInput') beginingTimeInput!: ElementRef;
  @ViewChild('endingTimeInput') endingTimeInput!: ElementRef;

  clickBeginingTime() {
    this.beginingTimeInput.nativeElement.click();
  }

  clickEndingTime() {
    this.endingTimeInput.nativeElement.click();
  }

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

  submit() {
    //save log
    console.log(this.form.value);
    this.form.value.type = this.form.value.type[0]; //taking only the first letter
    const [bhours, bminutes] = this.form.value.beginingTime.split(':');

    this.form.value.begining.setHours(bhours);
    this.form.value.begining.setMinutes(bminutes);

    const [ehours, eminutes] = this.form.value.endingTime.split(':');

    this.form.value.ending.setHours(ehours);
    this.form.value.ending.setMinutes(eminutes);

    if (this.data.id)
      this.loggingService.editLog(this.data.id, this.form.value);
    this.loggingService.renderLog();
  }
}
