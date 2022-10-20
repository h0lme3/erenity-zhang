import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  isbubble1Show: boolean = false
  isbubble1child1Show: boolean = false
  isbubble2Show: boolean = false
  isbubble3Show: boolean = false
  isbubble4Show: boolean = false
  bubble1: any = null;
  bubble2: any = null;
  bubble3: any = null;
  bubble4: any = null;
  type: any = "social";
  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init()
    setTimeout(() => {
      this.activateRoute.queryParams.subscribe((res: any) => {
        if (res) {

          setTimeout(() => {
            if (res.id == 'identify-yourself') {
              this.scrollTo('erenity-roadmap-content')
              this.isbubble1Show = true
            }
          }, 500);
        }
      })
    }, 500);

  }

  setBubbleShow(bubble1 = 0, type = 'Lawyers') {
    if (this.bubble1 == bubble1) {
      this.bubble1 = null
      this.isbubble1child1Show = false
      return
    }
    this.bubble1 = bubble1
    this.type = type
  }

  setChildBubbleShow() {
    if (this.isbubble1child1Show)
      this.bubble1 = null
    this.isbubble1child1Show = !this.isbubble1child1Show;
  }

  goToPage() {
    this.router.navigate(['/special-designed-test'], { queryParams: { type: this.type } })
  }

  scrollTo(className: string) {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
