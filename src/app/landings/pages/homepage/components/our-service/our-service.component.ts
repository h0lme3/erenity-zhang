import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { Dialog } from 'src/app/landings/shared/dialog/dialog';
import { Subscribe } from 'src/app/landings/shared/dialog/subscribe/subscribe';
import { SuccessDialog } from 'src/app/landings/shared/dialog/successDialog/successDialog';


@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

  showContent1: boolean = false;
  showContent2: boolean = false;
  showContent3: boolean = false;
  showContent4: boolean = false;
  showTitle = false
  constructor(private dialog: MatDialog) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {

    if (window.innerWidth >= 1920) {
      if (window.pageYOffset < 4964) {
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 5778) {
      } else {
        this.showContent1 = true
      }
      if (window.pageYOffset < 6535) {
      } else {
        this.showContent2 = true
      }
      if (window.pageYOffset < 7206) {
      } else {
        this.showContent3 = true
      }
      if (window.pageYOffset < 8106) {
      } else {
        this.showContent4 = true
      }
    }

    if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
      if (window.pageYOffset < 4100) {
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 4800) {
      } else {
        this.showContent1 = true
      }
      if (window.pageYOffset < 5600) {
      } else {
        this.showContent2 = true
      }
      if (window.pageYOffset < 6800) {
      } else {
        this.showContent3 = true
      }
      if (window.pageYOffset < 7700) {
      } else {
        this.showContent4 = true
      }
    }

    if (window.innerWidth < 1440) {
      if (window.pageYOffset < 4100) {
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 4800) {
      } else {
        this.showContent1 = true
      }
      if (window.pageYOffset < 5600) {
      } else {
        this.showContent2 = true
      }
      if (window.pageYOffset < 6162) {
      } else {
        this.showContent3 = true
      }
      if (window.pageYOffset < 6862) {
      } else {
        this.showContent4 = true
      }
    }
  }

  ngOnInit(): void {
    AOS.init()
  }
}
