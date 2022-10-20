import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'subscribe-dialog',
    templateUrl: './subscribe.html',
    styleUrls: ['./subscribe.scss']
})
export class Subscribe {
    email = new FormControl('', [Validators.required, Validators.email]);
    constructor(
        public dialogRef: MatDialogRef<Subscribe>,
        @Inject(MAT_DIALOG_DATA) public data) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    okFunction() {
    }
    onYesClick() {
        if (this.email.valid)
            this.dialogRef.close(this.email.value)
    }
    cancelFunction() {
    }

    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }

        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

}