import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'successDialog',
    templateUrl: './successDialog.html',
    styleUrls: ['./successDialog.scss']
})
export class SuccessDialog {

    constructor(
        public dialogRef: MatDialogRef<SuccessDialog>,
        @Inject(MAT_DIALOG_DATA) public data) {
            console.log(this.data)

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    okFunction() {
    }
    onYesClick() {
        this.dialogRef.close()
    }
    cancelFunction() {
    }

}