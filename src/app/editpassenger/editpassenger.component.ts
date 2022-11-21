import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'app-editpassenger',
  templateUrl: './editpassenger.component.html',
  styleUrls: ['./editpassenger.component.css']
})
export class EditpassengerComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditpassengerComponent>, @Inject(MAT_DIALOG_DATA) public data: Passenger) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }

}
