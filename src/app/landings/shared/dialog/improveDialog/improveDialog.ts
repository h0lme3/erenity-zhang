import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'improveDialog',
    templateUrl: './improveDialog.html',
    styleUrls: ['./improveDialog.scss']
})
export class ImproveDialog {

    constructor(
        public dialogRef: MatDialogRef<ImproveDialog>,
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