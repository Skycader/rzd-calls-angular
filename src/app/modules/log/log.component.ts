import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditLogComponent } from 'src/app/components/shared/modal/modals/edit-log/edit-log.component';
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

  constructor(
    protected userService: UserService,
    protected loggingService: LoggingService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loggingService.renderLog()
  }
  displayedColumns: string[] = [
    'begining',
    'ending',
    'caller',
    'duration',
    'type',
  ];

  openDialogue(row:ILogData) {
      this.dialog.open(EditLogComponent, {
        data: row
      }); 
  }
}
