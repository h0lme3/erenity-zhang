import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'social-tech',
  templateUrl: './social-tech.component.html',
  styleUrls: ['./social-tech.component.scss']
})
export class SocialTechComponent implements OnInit {

  lawyersItExec:boolean = false;
  actv:boolean = false;
  pol:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
