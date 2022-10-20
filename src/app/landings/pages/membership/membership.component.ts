import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { PaymentService } from 'src/app/services/payment.service';
import { membershipDialog } from '../../shared/dialog/membershipDialog/membershipDialog';
import { SuccessDialog } from '../../shared/dialog/successDialog/successDialog';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private dialog: MatDialog, private paymentService: PaymentService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    AOS.init()
    setTimeout(() => {
      this.activateRoute.queryParams.subscribe((res: any) => {
        if (res) {

          setTimeout(() => {
            if (res.id == 'membership-price') {
              this.scrollTo('membership-price')
            }
          }, 500);
        }
      })
    }, 500);
  }

  scrollTo(className: string) {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  onBeMembership(subject) {
    let dialogRef = this.dialog.open(membershipDialog, {
      width: '480px',
      data: { subject: subject, title: "Become a Member" }
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
