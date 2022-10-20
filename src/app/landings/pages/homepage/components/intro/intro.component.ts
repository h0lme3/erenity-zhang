import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { GeneralService } from 'src/app/services/general/general.service';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {
  @Output() scrollTo = new EventEmitter<any>();
  @ViewChild('videobg1', { static: true }) videoplayer: ElementRef;
  target: any;
  video: any;
  writer: any;
  constructor(private generalService: GeneralService, private cd: ChangeDetectorRef, private translateService: TranslateService) { }
  ngAfterViewInit(): void {
    this.generalService.setLoading(true)
    this.video = document.querySelector('.videobg1C')
    if (this.video) {
      this.video.muted = true
    }
    setTimeout(() => {
      this.video = document.querySelector('.videobg1C')
      this.video.muted = true;
      if (this.video.readyState == 4) {
        this.generalService.forceStopLoading()
        this.video.play()
      } else {
        this.video.onloadeddata = (event) => {
          setTimeout(() => {
            this.video.play()
            this.generalService.forceStopLoading()
          }, 500);
        };
      }
      // setTimeout(() => {
      //   this.generalService.setLoading(false)
      // }, 5000);
      this.cd.detectChanges();
    }, 500);

  }

  ngOnInit(): void {
    AOS.init()
    this.target = document.querySelector('.introTw2')
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
      typeColor: 'white',
      // cursorColor: 'black'
    })
    setTimeout(() => {
      this.translateService.get("homepage.subTitle").subscribe(res => {
        this.writer.type(res).start()
      })
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.writer.queue = []
        this.writer.type(event.translations.homepage.subTitle).start()
      });

    }, 1000);
  }

}
