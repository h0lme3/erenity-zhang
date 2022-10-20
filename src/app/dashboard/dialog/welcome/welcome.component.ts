import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent  {

  constructor(
    public dialogRef: MatDialogRef<WelcomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    if(!this.data){this.data = {} }
  }


}
