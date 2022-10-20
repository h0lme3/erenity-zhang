import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentService } from 'src/app/services/payment.service';
import { Subscribe } from '../../shared/dialog/subscribe/subscribe';
import { SuccessDialog } from '../../shared/dialog/successDialog/successDialog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  firstTimePop: boolean = false;

  constructor(private dialog: MatDialog, private paymentService: PaymentService) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  onSubscribe() {
    let dialogRef = this.dialog.open(Subscribe, {
      width: '450px'
    })

    dialogRef.afterClosed().subscribe(async res => {
      this.firstTimePop = true
      if (res) {
        let param = {
          emailSubject: "Blog Subscription",
          emailHtml: res,
          enableSendToAdmin: true
        }
        await this.paymentService.post(param).then(res => {
          this.dialog.open(SuccessDialog, {
            width: '450px',
            data: { message: "You have subscribed successfully!" }
          })
        })

      }
    })
  }

}
