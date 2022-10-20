import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-revolutionary',
  templateUrl: './revolutionary.component.html',
  styleUrls: ['./revolutionary.component.scss']
})
export class RevolutionaryComponent implements OnInit {
  showTitle: boolean = true
  constructor(private translateService: TranslateService) { }
  target: any;
  writer: any;
  ngOnInit(): void {
    AOS.init()
    this.target = document.querySelector('.introTw4')
    this.writer = new Typewriter(this.target, {
      typeSpeed: 60,
      loop: false,
      animateCursor: false,
      // blinkSpeed: 400,
      // deleteSpeed: 40,
      // typeSpeedMin: 65,
      // typeSpeedMax: 115,
      // deleteSpeedMin: 40,
      // deleteSpeedMax: 90,
      // typeClass: 'type-span',
      cursorClass: 'cursor-span',
      typeColor: 'black',
      // cursorColor: 'black'
    })
    setTimeout(() => {
      this.translateService.get("revolutionary.title5").subscribe(res => {
        this.writer.type(res).start()
      })
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.writer.queue = []
        this.writer.type(event.translations.revolutionary.title5).start()
      });
    }, 1000);
  }

}
