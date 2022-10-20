import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  showContent2: boolean = false
  showContent3: boolean = false
  showText1: boolean = false
  showText2: boolean = false
  showText3: boolean = false
  uniqueProducts = [{
    icon: 'chevron_right',
    content: `Cyber-vaccine (Knowledge + Application)`
  },
  {
    icon: 'chevron_right',
    content: `Awareness test`
  },
  {
    icon: 'chevron_right',
    content: `Cybersecurity knowledge test`
  },
  {
    icon: 'chevron_right',
    content: `Cyber incident mock practices`
  },
  {
    icon: 'chevron_right',
    content: `Using security products!`
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.innerWidth >= 1920) {
      if (window.pageYOffset < 100) {
      } else {
        this.showContent2 = true
      }

      if (window.pageYOffset < 200) {
      } else {
        this.showContent2 = true
      }
      if (window.pageYOffset < 900) {
      } else {
        this.showText1 = true
      }
      if (window.pageYOffset < 1300) {
      } else {
        this.showText2 = true
      }
      if (window.pageYOffset < 1300) {
      } else {
        this.showText3 = true
      }
    }

    if (window.innerWidth >= 1280 && window.innerWidth < 1920) {
      if (window.pageYOffset < 200) {
      } else {
        this.showContent2 = true
      }
      if (window.pageYOffset < 1478) {
      } else {
        this.showText1 = true
      }
      if (window.pageYOffset < 1850) {
      } else {
        this.showText2 = true
      }
      if (window.pageYOffset < 2050) {
      } else {
        this.showText3 = true
      }
    }

    if (window.innerWidth < 1280) {
      if (window.pageYOffset < 400) {
      } else {
        this.showContent2 = true
      }
      if (window.pageYOffset < 2800) {
      } else {
        this.showText1 = true
      }
      if (window.pageYOffset < 3500) {
      } else {
        this.showText2 = true
      }
      if (window.pageYOffset < 3900) {
      } else {
        this.showText3 = true
      }
    }
  }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "infinite": true,
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

}
