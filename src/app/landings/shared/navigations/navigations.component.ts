import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GeneralService } from 'src/app/services/general/general.service';
// @ts-ignore
import Typewriter from 't-writer.js';
import { CriticsDialog } from '../dialog/criticsDialog/criticsDialog';
import { ImproveDialog } from '../dialog/improveDialog/improveDialog';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})
export class NavigationsComponent implements OnInit {
  @Output() scrollTo = new EventEmitter<any>();
  @Output() openSideMenu = new EventEmitter<any>();
  @Input() menuActive: string = 'home';
  @ViewChild("drawer") drawer: any;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  isSticky: boolean = false;
  isMenuHide: boolean = false;
  isblackMenu: boolean = false;
  isMenuOpened: boolean = false;
  loggedIn: boolean = false;
  target: any;
  writer: any;
  activeMenu;
  lang = 'en'
  langMenu = [{ lang: 'en', name: 'English' }, { lang: 'cn', name: 'Chinese' }]
  activeMenuContent = 'About Us';
  activeMenuContent2 = 'Membership';
  routerTo = "/aboutus";
  firstTimePop: boolean = false

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.innerWidth <= 755)
      this.isMenuHide = true
    else
      this.isSticky = window.pageYOffset >= 10;
  }
  constructor(
    private router: Router,
    public generalService: GeneralService,
    public translate: TranslateService,
    private auth: AuthService,
    private dialog: MatDialog) {
    translate.addLangs(['en', 'cn']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|cn/) ? browserLang : 'en');

    this.router.events.subscribe((event) => {
      this.setLoginStatuses();
      this.setNavigationColors();
    })

    if (window.innerWidth <= 755) {
      this.isSticky = true
    }

  }

  private setLoginStatuses() {
    const userData: { username: string, pd: string } = this.generalService.getLocalStorage("UD")
    if (userData)
      this.loggedIn = true;
    else
      this.loggedIn = false;
  }

  private setNavigationColors() {
    if (this.router.url == '/')
      this.isblackMenu = false;
    else
      this.isblackMenu = true;
  }

  ngOnInit(): void {
    this.target = document.querySelector('.introTw3')
    this.writer = new Typewriter(this.target, {
      typeSpeed: 90,
      loop: false,
      animateCursor: false,
      cursorClass: 'cursor-span',
    })
    setTimeout(() => {
      this.translate.get("NAV.hope").subscribe(res => {
        this.writer.type(res).start()
      })
      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.writer.queue = []
        this.writer.type(event.translations.NAV.hope).start()
      });
    }, 5000);
  }

  goToRoadmap() {
    this.router.navigate(['/roadmap'], { queryParams: { id: "identify-yourself" } })
  }

  logout() {
    this.auth.logout()
  }

  onGoToAOR() {
    this.activeMenuContent = 'About Our Relationship';
    this.routerTo = '/about-our-relationship'
    if (!this.firstTimePop) {
      this.firstTimePop = true
      let dialogRef = this.dialog.open(ImproveDialog, {
        width: '365px',
        panelClass: 'custom-dialog-no-padding'
      })
      dialogRef.afterClosed().subscribe(res => {
        if (res)
          this.openCriticForms()
      })
    }
  }

  openCriticForms() {
    this.dialog.open(CriticsDialog, {
      width: '365px',
      panelClass: 'custom-dialog-no-padding'
    })
  }


}
