import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-victim-program',
  templateUrl: './victim-program.component.html',
  styleUrls: ['./victim-program.component.scss']
})
export class VictimProgramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(className: string) {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
