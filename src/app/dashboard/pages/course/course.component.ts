import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  parameterId;

  cards=[{
    id:"1",
    name:"Ready to Race",
    description:"Welcome to the social education course. This teaches you a mindset that makes you stand out in the real world job market. We know that the next difficulty will be communication with others. Here we come to help, to prepare you from the dark world to a more colorful world."
  },{
    id:"2",
    name:"Think on both sides",
    description:"Welcome to the tech course here. We value your skills and experiences in the darknet and respect your life experience. We would take your advice based your opinion for some times, but we will let you see the best of the two worlds."
  },{
    id:"3",
    name:"Ready to Race",
    description:"Welcome to the social education course. This teaches you a mindset that makes you stand out in the real world job market. We know that the next difficulty will be communication with others. Here we come to help, to prepare you from the dark world to a more colorful world."
  }]

  data:any;


  constructor(
    private actRouter:ActivatedRoute,
    private router:Router
  ) { 
    actRouter.params.subscribe((resp:any)=>{
      if(resp.id){
        this.parameterId = resp.id
        this.getData()
      }else{
        this.router.navigate(['/dashboard'])
      }
    })
  }

  getData(){
    this.data = this.cards.find(fd=>fd.id === this.parameterId)
  }

  ngOnInit(): void {
  }

}
