import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PaymentService } from 'src/app/services/payment.service';
import { SuccessDialog } from '../../shared/dialog/successDialog/successDialog';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  constructor(private dialog: MatDialog, private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  get phoneNumber(): FormControl {
    return this.contactForm.get('phoneNumber') as FormControl;
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      let param = {
        name: this.contactForm.value.name,
        emailSubject: "New Contact for Erenity",
        emailHtml: `
        First Name: ${this.contactForm.value.firstName}<br>
        Last Name: ${this.contactForm.value.lastName}<br>
        Email: ${this.contactForm.value.email}<br>
        Phone Number: ${this.contactForm.value.phoneNumber}<br>
        Company: ${this.contactForm.value.company}<br>
        Message: ${this.contactForm.value.message}<br>
        `,
        enableSendToAdmin: true
      }
      await this.paymentService.post(param).then(res => {
        this.dialog.open(SuccessDialog, {
          width: '450px',
          data: { message: "Thank you for your feedback" }
        })
      })
      this.contactForm.reset()
    }
  }

}
