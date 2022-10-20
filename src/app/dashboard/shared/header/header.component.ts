import { Component, OnInit } from '@angular/core';
import {GeneralService} from 'src/app/services/general/general.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import * as _moment from 'moment';
const moment =  _moment;


@Component({
  selector: 'headerbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  photoProfile ="./assets/images/elisabeth.jpg";
  dateNow = new Date();
  logo="./assets/images/serv4.png";


  constructor(
    private _general:GeneralService,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    console.log(moment())
  }

  checkLastModif(data){
    return moment().diff(moment(data),'day')>0? moment(data).format("DD/MM/YYYY"): moment().diff(moment(data),'hour') > 1? `${moment().diff(moment(data),'hour')} hrs ago`: `${moment().diff(moment(data),'minute')} mins ago`;
  }

  logout(){
    this.auth.logout();
  }

}
