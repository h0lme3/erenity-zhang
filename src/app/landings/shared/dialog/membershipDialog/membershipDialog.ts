import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'membershipDialog',
    templateUrl: './membershipDialog.html',
    styleUrls: ['./membershipDialog.scss']
})
export class membershipDialog {
    membershipForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email])
    })

    constructor(
        public dialogRef: MatDialogRef<membershipDialog>,
        @Inject(MAT_DIALOG_DATA) public data) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    okFunction() {
    }
    onYesClick() {
        if (this.membershipForm.valid)
            this.dialogRef.close(this.membershipForm.value)
    }
    cancelFunction() {
    }

    getErrorMessage() {
        if (this.membershipForm.get("email").hasError('required')) {
            return 'Please provide your email';
        }

        return this.membershipForm.get("email").hasError('email') ? 'Not a valid email' : '';
    }

}