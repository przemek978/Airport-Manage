import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css'],
})
export class AddflightComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

/**
 *
 * import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddShowModel} from "../AddShowModel";
import {Film} from "../Film";
import {ShowsService} from "../shows.service";

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  public filmList: Film[];
  constructor(public dialogRef: MatDialogRef<AddShowComponent>, private shows: ShowsService , @Inject(MAT_DIALOG_DATA) public data: AddShowModel) { }

  public filmList2: string[] = [
    "Eternals",
    "Dune"


  ]
  roomList: string[] = ["1", "2", "3" , "4", "5"];

  ngOnInit(): void {
    this.shows.getFilms().subscribe(list => {
      this.filmList = list;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
 */
