import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent  {

 
  constructor(
    public dialogRef: MatDialogRef<ThankyouComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    
  }

  close(){
    this.dialogRef.close()
  }
}
