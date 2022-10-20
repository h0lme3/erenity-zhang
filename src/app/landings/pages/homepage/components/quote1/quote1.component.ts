import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.scss']
})
export class Quote1Component implements OnInit {
  showTitle: boolean = false

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.innerWidth >= 1280)
      if (window.pageYOffset < 500) {
      } else {
        this.showTitle = true
      }

    if (window.innerWidth <= 1280)
      if (window.pageYOffset < 500) {

      } else {
        this.showTitle = true
      }
  }
  ngOnInit(): void {
    AOS.init();
  }


}
