import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gn-l',
  templateUrl: './gn-l.component.html',
  styleUrls: ['./gn-l.component.scss']
})
export class GnLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
