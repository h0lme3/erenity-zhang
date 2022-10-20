import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  isbubble1Show: boolean = false
  isbubble2Show: boolean = false
  isbubble3Show: boolean = false
  isbubble4Show: boolean = false
  bubble1: number = NaN;
  bubble2: number = NaN;
  bubble3: number = NaN;
  bubble4: number = NaN;
  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init()
  }

  goToPage(type: string, number: number) {

    switch (type) {
      case 'bubble1':
        if (this.bubble1 ==  number)
          switch (this.bubble1) {
            case 0:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'social' } })
              break;
            case 1:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'tech' } })
              break;
            case 2:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'social' } })
              break;
            case 3:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'tech' } })
              break;

            default:
              break;
          }
        break;
      case 'bubble2':
        if (this.bubble2 == number)
          switch (this.bubble2) {
            case 0:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'social' } })
              break;
            case 1:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'tech' } })
              break;
            case 2:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'social' } })
              break;
            case 3:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'tech' } })
              break;

            default:
              break;
          }
        break;
      // case 'bubble3':
      //   switch (this.bubble1) {
      //     case 0:
      //       this.router.navigate(["/special-designed-test"], { queryParams: { type: 'social' } })
      //       break;
      //     case 1:
      //       this.router.navigate(["/special-designed-test"], { queryParams: { type: 'tech' } })
      //       break;
      //     case 2:
      //       this.router.navigate(["/special-designed-test"], { queryParams: { type: 'social' } })
      //       break;
      //     case 3:
      //       this.router.navigate(["/special-designed-test"], { queryParams: { type: 'tech' } })
      //       break;

      //     default:
      //       break;
      //   }
      //   break;
      case 'bubble4':

        break;

      default:
        break;
    }
  }

}
