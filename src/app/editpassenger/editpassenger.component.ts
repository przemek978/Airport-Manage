
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'app-editpassenger',
  templateUrl: './editpassenger.component.html',
  styleUrls: ['./editpassenger.component.css']
})
export class EditpassengerComponent implements OnInit {

  @Input() passenger!:Passenger;
  @Output() editpassenger: EventEmitter<void> = new EventEmitter();
  constructor(private dialogRef: MatDialogRef<EditpassengerComponent>, @Inject(MAT_DIALOG_DATA) public data: Passenger) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }
  editSelectedFilm(): void {
    this.editpassenger.emit();
  }
}
