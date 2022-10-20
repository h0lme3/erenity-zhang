import { Component, OnInit } from '@angular/core';
import {menu} from './menu';
import {Router, NavigationEnd} from '@angular/router';
// import {MenuSearchService} from 'src/app/services/general/menu-search.service';
import {GeneralService} from 'src/app/services/general/general.service';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// import {AuthenticationService} from 'src/app/services/http/auth/auth.service'


@Component({
  selector: 'menubar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mn; fmn;
  menuClick=[];
  mnDdActive=[];
  searchMenuText: Subject<string>;
  menuSearch='';
  collapse:boolean = false;
  moduleActive=[];
  menuHeight;
  urlnow:string;

  constructor(
    private route:Router,
    // private menuService:MenuSearchService,
    private _general:GeneralService,
    // private _auth:AuthenticationService,
  ) {
    this.route.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(
      (x:NavigationEnd)=>{
        this.urlnow = x.url;
      }
    )
  }

  
  ngOnInit() {
    this.mn = menu;
    this.firstActiveMenu();
    if(this._general.getLocalStorage("menuCollapse") != undefined){
      let cpls = JSON.parse(this._general.getLocalStorage("menuCollapse"));
      this.collapse = cpls;
    }
    
    // this.moduleActive=this._general.getLocalStorage("userData").modulesActive;
    this.setIsShowMenu();
  }

  getHeight(){

  }

  changeMenuActive(idx){
    for(let i=0; i<this.menuClick.length; i++){
      if(i != idx){
        this.menuClick[i] = false;    
      }
    }
    this.menuClick[idx] = this.menuClick[idx]? false :true ;
  }

  setIsShowMenu(){
    for (let i = 0; i < this.mn.length; i++) {
      if( this.mn[i].child != undefined){
        for (let s = 0; s < this.mn[i].child.length; s++) {
          const ele = this.mn[i].child[s];
          // if(environment.production){
            // this.mn[i].child[s].isShow = this._general.checkActiveModule(this.mn[i].child[s].moduleName);
          // }else{
          //   this.mn[i].child[s].isShow  = true
          // }
        }
      }
    }
  }

  ngAfterViewInit(): void {
    // this.searchMenuText = this.menuService.searchMenu;
    // this.searchMenuText.subscribe(
    //   (resp)=>{
    //     this.menuSearch = resp;
    //   }
    // )
  }

  setMenuCollapse(data){
    this.collapse = data;
    this._general.setMenuCollapse(data);
  }
  
  firstActiveMenu(){
    let ss:any = menu;
    
    for (let i = 0; i < ss.length; i++) {
      let scs=false;
      if(ss[i].child != undefined){
        for (let ii = 0; ii < ss[i].child.length; ii++) {
          if("/"+ss[i].child[ii].path === this.route.url){
            scs = true;
            break;
          }
        }
        if(scs){
          this.menuClick.push(true);
          this.mnDdActive.push(true);
          break;
        }else{
          this.menuClick.push(false);
          this.mnDdActive.push(false);
        }
      }else{
        this.menuClick.push(false);
        this.mnDdActive.push(false);
      }
    }
  }


  activeClick(url){
    let ss:any = menu;
    this.mnDdActive = undefined;
    this.mnDdActive = [];

    for (let i = 0; i < ss.length; i++) {
      let scs=false;
      if(ss[i].child != undefined){
        for (let ii = 0; ii < ss[i].child.length; ii++) {
          if(ss[i].child[ii].path === url){
            scs = true;
            break;
          }
        }
        if(scs){
          this.mnDdActive.push(true);
          break;
        }else{
          this.mnDdActive.push(false);
        }
      }else{
        this.mnDdActive.push(false);
      }
    }
  }

  callFuncMenu(menu){
    this[menu.functionName]();
  }

}
