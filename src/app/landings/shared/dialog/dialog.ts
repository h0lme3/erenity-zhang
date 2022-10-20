import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog',
    templateUrl: './dialog.html',
    styleUrls: ['./dialog.scss']
})
export class Dialog {

    constructor(
        public dialogRef: MatDialogRef<Dialog>,
        @Inject(MAT_DIALOG_DATA) public data) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    okFunction() {
    }
    onYesClick() {
        this.dialogRef.close(this.data)
    }
    cancelFunction() {
    }

}