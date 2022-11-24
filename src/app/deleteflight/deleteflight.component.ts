import { Flight } from 'src/app/types/flight';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightService } from '../Server/services/flight.service';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {

  constructor(private flightservice: FlightService, @Inject(MAT_DIALOG_DATA) public postData: Flight, private dialogRef: MatDialogRef<DeleteflightComponent>) { }

  ngOnInit(): void {
  }

  deleteFlight(): void {
    this.flightservice.deleteFlight(this.postData.id)
      .subscribe({
        next: (res) => {
          //this.toast.success({ detail: "Success", summary: "Post deleted successfully!", duration: 5000 });
          console.log("Success");
          this.dialogRef.close('delete');
        },
        error: () => {
          //this.toast.error({ detail: "Error", summary: "Error while deleting the record!", duration: 5000 });
          console.log("Debil");
        }
      })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
