import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';
import { CriticsDialog } from 'src/app/landings/shared/dialog/criticsDialog/criticsDialog';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  onClose: boolean = false;
  onClose1: boolean = false;
  onClose2: boolean = false;
  constructor(private dialog: MatDialog) { }
  showTitle = false
  showContent = false
  about1: boolean = false
  about2: boolean = false
  about3: boolean = false;
  contents = [
    { content: "about.about1Sub1", route: "/aboutyou" },
    { content: "about.about1Sub2", route: "/roadmap" },
    { content: "about.about1Sub3", route: "/aboutyou/book-consultation" },
  ]
  contents1 = [
    { content: "about.about2Sub1", route: "/aboutus" },
    { content: "about.about2Sub2", route: "/aboutus/endabuse-project" },
    { content: "about.about2Sub3", route: "/aboutus/first-project" },
  ]
  contents2 = [
    { content: "about.about3Sub1", route: "/about-our-relationship" },
    { content: "about.about3Sub2", route: "/about-our-relationship/work-with-us" },
    { content: "about.about3Sub3" },
    { content: "about.about3Sub4", route: "/membership" },
  ]
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.innerWidth > 1280) {
      if (window.pageYOffset < 1400) {
        //  this.showTitle = false
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 1600) {
        // this.showContent = false
      } else {
        this.showContent = true
      }
    }

    if (window.innerWidth == 1280) {
      if (window.pageYOffset < 1700) {
        //  this.showTitle = false
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 1900) {
        // this.showContent = false
      } else {
        this.showContent = true
      }
    }

    if (window.innerWidth < 1280) {
      if (window.pageYOffset < 1038) {
        //  this.showTitle = false
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 1138) {
        // this.showContent = false
      } else {
        this.showContent = true
      }
    }
  }

  ngOnInit(): void {
    AOS.init()
  }

  closeBubble(idx) {
    switch (idx) {
      case 0:
        this.onClose = true
        this.about1 = false
        break;
      case 1:
        this.onClose1 = true
        this.about2 = false
        break;
      case 2:
        this.onClose2 = true
        this.about3 = false
        break;

      default:
        break;
    }

  }

  openBubble(idx) {
    switch (idx) {
      case 0:
        if (this.about1 == false && this.onClose == false)
          this.about1 = true
        this.onClose = false
        break;
      case 1:
        if (this.about2 == false && this.onClose1 == false)
          this.about2 = true
        this.onClose1 = false
        break;
      case 2:
        if (this.about3 == false && this.onClose2 == false)
          this.about3 = true
        this.onClose2 = false
        break;

      default:
        break;
    }


  }

  openCriticForms(index) {
    if (index == 2)
      this.dialog.open(CriticsDialog, {
        width: '365px',
        panelClass: 'custom-dialog-no-padding'
      })
  }

}
