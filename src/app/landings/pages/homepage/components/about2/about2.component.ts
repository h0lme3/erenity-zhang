import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.scss']
})
export class About2Component implements OnInit {
  showContent1: boolean = false;
  showContent2: boolean = false;
  showTitle = false
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
      if (window.pageYOffset < 2569) {
        //  this.showTitle = false
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 2918) {
        // this.showContent1 = false
      } else {
        this.showContent1 = true
      }
      if (window.pageYOffset < 2918) {
        // this.showContent2 = false
      } else {
        this.showContent2 = true
      }
    } else if (window.innerWidth < 1440) {
      if (window.pageYOffset < 2569) {
        //  this.showTitle = false
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 2669) {
        // this.showContent1 = false
      } else {
        this.showContent1 = true
      }
      if (window.pageYOffset < 2669) {
        // this.showContent2 = false
      } else {
        this.showContent2 = true
      }
    }else if (window.innerWidth >= 1920){
      if (window.pageYOffset < 3605) {
        //  this.showTitle = false
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 3705) {
        // this.showContent1 = false
      } else {
        this.showContent1 = true
      }
      if (window.pageYOffset < 3705) {
        // this.showContent2 = false
      } else {
        this.showContent2 = true
      }
    }

  }
  ngOnInit(): void {
    AOS.init({
      startEvent: 'DOMContentLoaded'
    })
  }

}
