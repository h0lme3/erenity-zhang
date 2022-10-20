import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-quote2',
  templateUrl: './quote2.component.html',
  styleUrls: ['./quote2.component.scss']
})
export class Quote2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
