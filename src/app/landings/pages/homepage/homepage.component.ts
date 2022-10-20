import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { PaymentService } from 'src/app/services/payment.service';
// @ts-ignore
import Typewriter from 't-writer.js';
import { Subscribe } from '../../shared/dialog/subscribe/subscribe';
import { SuccessDialog } from '../../shared/dialog/successDialog/successDialog';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  menuActive: string = "home"
  target: any;
  target2: any;
  writer: any;
  writer2: any;
  popShow: boolean = true
  firsTimeShow: boolean = true
  firstTimePop: boolean = false
  firstTimePopLeft: boolean = false
  constructor(public translate: TranslateService, private dialog: MatDialog, private paymentService: PaymentService) {
    translate.addLangs(['en', 'cn']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|cn/) ? browserLang : 'en');
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.innerWidth > 1280) {
      // if (window.pageYOffset >= 3000) {
      //   if (!this.firstTimePopLeft) {
      //     this.activeSurveyPopUp()
      //   }
      // }
      // if (window.pageYOffset >= 3800) {
      //   if (!this.firstTimePop) {
      //     this.onSubscribe()
      //   }
      // }
    }

    if (window.innerWidth == 1280) {
      // if (window.pageYOffset >= 2300) {
      //   if (!this.firstTimePopLeft) {
      //     this.activeSurveyPopUp()
      //   }
      // }
      // if (window.pageYOffset >= 2900) {
      //   if (!this.firstTimePop) {
      //     this.onSubscribe()
      //   }
      // }
    }

    if (window.innerWidth < 1280) {
      // if (window.pageYOffset >= 2300) {
      //   if (!this.firstTimePopLeft) {
      //     this.activeSurveyPopUp()
      //   }
      // }
      // if (window.pageYOffset >= 2900) {
      //   if (!this.firstTimePop) {
      //     this.onSubscribe()
      //   }
      // }
    }

    if (window.pageYOffset < 720) {
      this.menuActive = "home"
    } else if (window.pageYOffset < 2020) {
      this.menuActive = "about"
    } else if (window.pageYOffset >= 2020) {
      this.menuActive = "services"
    }

  }
  ngOnInit(): void {

  }

  activeSurveyPopUp() {
    if (!this.firstTimePopLeft) {
      this.firstTimePopLeft = true
      setTimeout(() => {
        this.target = document.querySelector('.introTw')
        this.writer = new Typewriter(this.target, {
          typeSpeed: 90,
          loop: false,
          animateCursor: false,
          cursorClass: 'cursor-span',
          typeColor: '#fcb33c',
        })
        this.translate.get("NAV.TKS").subscribe(res => {
          this.writer.type(res).start()
        })
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
          this.writer.queue = []
          this.writer.type(event.translations.NAV.TKS).start()
        });
      }, 1500);

    }
  }

  scrollTo(className: string) {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
    this.menuActive = className;
  }

  onSubscribe() {
    let dialogRef = this.dialog.open(Subscribe, {
      width: '450px'
    })

    dialogRef.afterClosed().subscribe(async res => {
      this.firstTimePop = true
      if (res) {
        let param = {
          name: res.name,
          emailSubject: "Email Subscription",
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
