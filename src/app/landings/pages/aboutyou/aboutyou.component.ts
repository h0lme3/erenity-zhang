import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutyou',
  templateUrl: './aboutyou.component.html',
  styleUrls: ['./aboutyou.component.scss']
})
export class AboutyouComponent implements OnInit {
  showTitle: boolean = true
  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  goToRoadmap() {
    this.router.navigate(['/roadmap'], { queryParams: { id: "identify-yourself" } })
  }

}
