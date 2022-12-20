import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditLogComponent } from './modals/edit-log/edit-log.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}
  openDialog() {
    this.dialog.open(EditLogComponent);
  }
}
