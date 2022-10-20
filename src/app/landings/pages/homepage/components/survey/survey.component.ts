import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  showContent1: boolean = false;
  showContent2: boolean = false;
  showTitle = false

  techEnter = false
  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init()
  }

  goToPage(type: string) {
    if (type != 'victim')
      this.router.navigate(['/special-designed-test'], { queryParams: { type: type } })
    else
      this.router.navigate(['/victim-sector'])
  }

}
