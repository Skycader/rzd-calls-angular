import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/services/user.service';
import {  ILogData } from './models/log';
import { LoggingService } from './services/logging.service';


/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  dataSource: ILogData[] = [];

  constructor(
    protected userService: UserService,
    protected loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.dataSource = this.loggingService.listLog()
    console.log(this.dataSource)
  }
  displayedColumns: string[] = [
    'begining',
    'ending',
    'caller',
    'duration',
    'type',
  ];

  openDialogue(row:any) {
    alert(row)
    console.log(row)
  }
}
