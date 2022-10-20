import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentService } from 'src/app/services/payment.service';
import { SuccessDialog } from '../successDialog/successDialog';

@Component({
    selector: 'criticsDialog',
    templateUrl: './criticsDialog.html',
    styleUrls: ['./criticsDialog.scss']
})
export class CriticsDialog {
    criticForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        subject: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required),
    })

    constructor(
        public dialogRef: MatDialogRef<CriticsDialog>,
        @Inject(MAT_DIALOG_DATA) public data,
        private dialog: MatDialog,
        private paymentService: PaymentService) {

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

    async onSubmit() {
        if (this.criticForm.valid) {
            let param = {
                name: this.criticForm.value.name,
                emailSubject: this.criticForm.value.subject,
                emailHtml: `
                Email: ${this.criticForm.value.email} <br>
                Message: ${this.criticForm.value.message}
                `,
                enableSendToAdmin: true
            }
            await this.paymentService.post(param).then(res => {
                this.dialog.open(SuccessDialog, {
                    width: '450px',
                    data: { message: "Thank you for your feedback" }
                })
            })
            this.dialogRef.close(true)
        }
    }

}