import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Passenger } from '../types/passenger';

@Component({
  selector: 'app-addpassengertofly',
  templateUrl: './addpassengertofly.component.html',
  styleUrls: ['./addpassengertofly.component.css']
})
export class AddpassengertoflyComponent implements OnInit {

  //@Input() data!:Passenger;
  constructor(private dialogRef: MatDialogRef<AddpassengertoflyComponent>, @Inject(MAT_DIALOG_DATA) public data: Passenger) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
