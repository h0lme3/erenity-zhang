import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {MatDialog} from "@angular/material/dialog";
import {ChooseSectorComponent} from './dialog/choose-sector/choose-sector.component'
import * as $ from 'jquery';

@Component({
  selector: 'app-landings',
  templateUrl: './landings.component.html',
  styleUrls: ['./landings.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LandingsComponent implements OnInit {
  menuActive: string = "home"
  sideMenuActive: string = ""
  sideMenuCurrActive: string = "About Us"
  popShow:boolean = true
  firsTimeShow:boolean = true
  
  
  constructor(
    private router: Router, 
    private dialog:MatDialog,
    public translate: TranslateService) {
    this.router.events.subscribe(x => {
      window.scrollTo(0, 0)
    })
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.pageYOffset < 720) {
      this.menuActive = "home"
    } else if (window.pageYOffset < 2020) {
      this.menuActive = "about"
    } else if (window.pageYOffset >= 2020) {
      this.menuActive = "services"
    }
  }
 
  ngOnInit(): void {
    $('body').addClass('landingpage');
  }

  ngOnDestroy(){
    $('body').removeClass('landingpage');
  }

  scrollTo(className: string) {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
    this.menuActive = className;
  }

  showSectorPopUp(){
    this.dialog.open(ChooseSectorComponent, {})
    .afterClosed().subscribe(resp=>{
      if(resp){
        if(resp === 'social'){
          this.router.navigate(['./social'])
        }else if(resp === 'tech'){
          this.router.navigate(['./hacker-sdt'])
        }
      }
    })
  }

}
