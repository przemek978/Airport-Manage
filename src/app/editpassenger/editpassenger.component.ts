<<<<<<< HEAD
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Passanger} from "../passanger";

import { Component, OnInit } from '@angular/core';
=======
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Passenger } from '../types/passenger';
>>>>>>> 2cb89b7e1781cddee5d4f2235282a25be2d8ae7f

@Component({
  selector: 'app-editpassenger',
  templateUrl: './editpassenger.component.html',
  styleUrls: ['./editpassenger.component.css']
})
export class EditpassengerComponent implements OnInit {

<<<<<<< HEAD
  constructor(public dialogRef: MatDialogRef<EditpassengerComponent>, @Inject(MAT_DIALOG_DATA) public data: PassangerModel) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
=======
  constructor(private dialogRef: MatDialogRef<EditpassengerComponent>, @Inject(MAT_DIALOG_DATA) public data: Passenger) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }

>>>>>>> 2cb89b7e1781cddee5d4f2235282a25be2d8ae7f
}
