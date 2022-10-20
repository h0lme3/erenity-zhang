import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PaymentService } from 'src/app/services/payment.service';
import { SuccessDialog } from '../../shared/dialog/successDialog/successDialog';

@Component({
  selector: 'app-critics',
  templateUrl: './critics.component.html',
  styleUrls: ['./critics.component.scss']
})
export class CriticsComponent implements OnInit {
  feedbackForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  constructor(private dialog: MatDialog, private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.feedbackForm.valid) {
      let param = {
        name: this.feedbackForm.value.name,
        emailSubject: this.feedbackForm.value.subject,
        emailHtml: `
                Email: ${this.feedbackForm.value.email} <br>
                Message: ${this.feedbackForm.value.message}
                `,
        enableSendToAdmin: true
      }
      await this.paymentService.post(param).then(res => {
        this.dialog.open(SuccessDialog, {
          width: '450px',
          data: { message: "Thank you for your feedback" }
        })
      })
      this.feedbackForm.reset()
    }

  }

}
