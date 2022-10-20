import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'allDialog',
    templateUrl: './allDialog.html',
    styleUrls: ['./allDialog.scss']
})
export class AllDialog {

    constructor(
        public dialogRef: MatDialogRef<AllDialog>,
        @Inject(MAT_DIALOG_DATA) public data) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    okFunction() {
    }
    onYesClick() {
        this.dialogRef.close(true)
    }
    cancelFunction() {
    }

}