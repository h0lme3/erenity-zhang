import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  cards=[{
    id:1,
    name:"Ready to Race",
    description:"Welcome to the social education course. This teaches you a mindset that makes you stand out in the real world job market. We know that the next difficulty will be communication with others. Here we come to help, to prepare you from the dark world to a more colorful world."
  },{
    id:2,
    name:"Think on both sides",
    description:"Welcome to the tech course here. We value your skills and experiences in the darknet and respect your life experience. We would take your advice based your opinion for some times, but we will let you see the best of the two worlds."
  },{
    id:3,
    name:"Ready to Race",
    description:"Welcome to the social education course. This teaches you a mindset that makes you stand out in the real world job market. We know that the next difficulty will be communication with others. Here we come to help, to prepare you from the dark world to a more colorful world."
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
