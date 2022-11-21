import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editflight',
  templateUrl: './editflight.component.html',
  styleUrls: ['./editflight.component.css']
})
export class EditflightComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditflightComponent>) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }

}
