import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-view-our-product',
  templateUrl: './view-our-product.component.html',
  styleUrls: ['./view-our-product.component.scss']
})
export class ViewOurProductComponent implements OnInit {

  constructor() { }
  resolution = window.innerWidth - 100
  ngOnInit(): void {
  }

  gotoProductContent(){
    $([document.documentElement, document.body]).scrollTop($("#product-content").offset().top)
  }

}
