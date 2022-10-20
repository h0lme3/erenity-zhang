import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {GeneralService} from 'src/app/services/general/general.service';
import {MatDialog} from "@angular/material/dialog";
import {WelcomeComponent} from './dialog/welcome/welcome.component';
import { Subject } from 'rxjs';
import * as $ from 'jquery'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  collapse: Subject<boolean>;
  collapseMenu=false;



  constructor(
    private dialog: MatDialog,
    private general:GeneralService,
  ) { }

  ngOnInit(): void {
    $('body').addClass('bg-yellow4');
    $('body').addClass('dshbrd');
    this.collapse = this.general.collapse;
    this.collapse.subscribe((x)=>{
      this.collapseMenu = x;
    });
    

  }

  ngOnDestroy(){
    $('body').removeClass('bg-yellow4');
    $('body').removeClass('dshbrd');
  }

}
