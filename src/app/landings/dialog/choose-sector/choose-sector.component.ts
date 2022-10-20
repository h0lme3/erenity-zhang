import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-choose-sector',
  templateUrl: './choose-sector.component.html',
  styleUrls: ['./choose-sector.component.scss']
})
export class ChooseSectorComponent {
  
  select;

  constructor(
    public dialogRef: MatDialogRef<ChooseSectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    
  }

  choose(type){
    this.select = type
  }

  submit(){
    this.dialogRef.close(this.select)
  }

}
