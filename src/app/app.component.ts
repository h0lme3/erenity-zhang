import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GeneralService } from './services/general/general.service';
import * as AOS from 'aos'
import { Meta } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <div data-aos="fade-in" class="loading-spinner" [ngClass]="{'d-none':!isLoading}" > 
    <img src="./assets/images/loading.gif" alt="loading"> 
  </div> 
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'erenity';
  loading = new BehaviorSubject(false);
  loadingDesc = "";
  loadingDescArray: any;
  isLoading: boolean = true
  constructor(
    private generalService: GeneralService, 
    private meta: Meta,
    translate:TranslateService
  ) {
    translate.addLangs( ['en','cn'] );
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: "keywords", content: `Cyberstalking, GDPR, Privacy protection law, What can I do if I’m hacked, Social media marketing, Data analytics, Cybersecurity Executive training, Non technical cybersecurity, Cybersecurity leadership, Online stalking, Cyber Victims, Domestic violence, Technology Abuse, AI cybersecurity, Cybercriminals, Hackers, Hacking, I’m being watched, Spywares, Remote hacking, Darknet, Tor`
      },
    ])
    AOS.init();
  }

  async ngAfterViewInit() {
    this.loading = this.generalService.loading;
    this.loadingDescArray = this.generalService.loadingDescArray;
    setTimeout(() => {
      this.loading.subscribe((x: any) => {
        if (x)
          this.isLoading = true
        else
          this.isLoading = false
      });
    }, 1000);

    this.loadingDescArray.subscribe(
      (x: string | any[]) => { setTimeout(() => { this.loadingDesc = x[x.length - 1] }, 200); }
    )

  }
}
