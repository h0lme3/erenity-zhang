import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'issue-post-covid',
  templateUrl: './issue-post-covid.component.html',
  styleUrls: ['./issue-post-covid.component.scss']
})
export class IssuePostCovidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      startEvent: 'DOMContentLoaded'
    })
  }

}
