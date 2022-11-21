import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Passanger} from "../passanger";

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editpassenger',
  templateUrl: './editpassenger.component.html',
  styleUrls: ['./editpassenger.component.css']
})
export class EditpassengerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditpassengerComponent>, @Inject(MAT_DIALOG_DATA) public data: PassangerModel) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
