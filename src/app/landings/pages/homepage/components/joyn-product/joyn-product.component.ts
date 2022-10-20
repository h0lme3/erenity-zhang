import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-joyn-product',
  templateUrl: './joyn-product.component.html',
  styleUrls: ['./joyn-product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JoynProductComponent implements OnInit {
  showTitle: boolean = false
  showTitle2: boolean = false
  joyContents = [{
    icon: 'chevron_right',
    content: `joyn.t1p1`,
  },
  {
    icon: 'chevron_right',
    content: ``,
  },
  {
    icon: 'chevron_right',
    content: `joyn.t1p3`,
  },
  {
    icon: 'chevron_right',
    content: `joyn.t1p4`,
  },
  {
    icon: 'chevron_right',
    content: `joyn.t1p5`,
  },
  ]

  uniqueProducts = [{
    icon: 'chevron_right',
    content: `joyn.t2p1`
  },
  {
    icon: 'chevron_right',
    content: `joyn.t2p2`
  },
  {
    icon: 'chevron_right',
    content: `joyn.t2p3`
  },
  {
    icon: 'chevron_right',
    content: `joyn.t2p4`
  },
  {
    icon: 'chevron_right',
    content: `joyn.t2p5`
  },
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
    AOS.init()
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.innerWidth >= 1920) {
      if (window.pageYOffset < 10820) {
      } else {
        this.showTitle = true
      }

      if (window.pageYOffset < 11353) {
      } else {
        this.showTitle2 = true
      }

    }

    if (window.innerWidth >= 1280 && window.innerWidth < 1920) {
      if (window.pageYOffset < 9354) {
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 9754) {
      } else {
        this.showTitle2 = true
      }

    }

    if (window.innerWidth < 1280) {
      if (window.pageYOffset < 8035) {
      } else {
        this.showTitle = true
      }
      if (window.pageYOffset < 8535) {
      } else {
        this.showTitle2 = true
      }
    }
  }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "infinite": false,
    "dots": true,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,

      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }

    }, {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      }
    }]
  };

  goTo(){
    this.router.navigate(['/inProgress'])
  }

}
