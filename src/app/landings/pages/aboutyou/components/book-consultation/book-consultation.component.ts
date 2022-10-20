import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { membershipDialog } from 'src/app/landings/shared/dialog/membershipDialog/membershipDialog';
import { SuccessDialog } from 'src/app/landings/shared/dialog/successDialog/successDialog';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-book-consultation',
  templateUrl: './book-consultation.component.html',
  styleUrls: ['./book-consultation.component.scss']
})
export class BookConsultationComponent implements OnInit {

  constructor(private dialog: MatDialog, private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  onBeMembership(subject) {
    let dialogRef = this.dialog.open(membershipDialog, {
      width: '480px',
      data: { subject: subject, title: "Book Consultation" }
    })
    dialogRef.afterClosed().subscribe(async res => {
      if (res) {
        let param = {
          name: res.name,
          emailSubject: subject,
          emailHtml: res.email,
          enableSendToAdmin: true
        }
        await this.paymentService.post(param).then(res => {
          this.dialog.open(SuccessDialog, {
            width: '450px',
            data: { message: "Thank you for your feedback" }
          })
        })

      }
    })
  }

}
