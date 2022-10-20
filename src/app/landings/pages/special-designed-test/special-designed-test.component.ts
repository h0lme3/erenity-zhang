import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-special-designed-test',
  templateUrl: './special-designed-test.component.html',
  styleUrls: ['./special-designed-test.component.scss']
})
export class SpecialDesignedTestComponent implements OnInit {
  type: string = "social"
  isbubble1Show: boolean = false
  isbubble2Show: boolean = false
  isbubble3Show: boolean = false
  isbubble4Show: boolean = false
  bubble1: any = null;
  bubble2: any = null;
  bubble3: any = null;
  bubble4: any = null;
  showForm: boolean = false
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  myFormGroup = new FormGroup({
    phoneNumber: new FormControl({ value: '', disabled: false }, [Validators.required,]),
    firstName: new FormControl({ value: '', disabled: false }, [Validators.required,]),
    lastName: new FormControl({ value: '', disabled: false }, [Validators.required,]),
    email: new FormControl({ value: '', disabled: false }, [Validators.required,]),
  });

  onSubmit(): void {

  }

  get phoneNumber(): FormControl {
    return this.myFormGroup.get('phoneNumber') as FormControl;
  }

  ngOnInit(): void {
    AOS.init()
    window.scrollTo(0, 0);
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.type = res.type
      switch (this.type) {
        case 'social-sector':
          this.type = "social"
          break;
        case 'tech-sector':
          this.type = "tech"
          break;
        case 'cyberstalking':
          this.type = "cyberstalking"
          break;
        default:
          break;
      }
    })
  }

  scrollTo(className: string) {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  goToPage(type: string, number: number) {

    switch (type) {
      case 'bubble1':
        this.bubble1 = number
        switch (number) {
          case 0:
            this.type = 'social'
            this.scrollTo("special-designed-content")
            break;
          case 1:
            this.type = 'tech'
            this.scrollTo("special-designed-content")
            break;
          case 2:
            this.type = 'social'
            this.scrollTo("special-designed-content")
            break;
          case 3:
            this.type = 'tech'
            this.scrollTo("special-designed-content")
            break;

          default:
            break;
        }
        break;
      case 'bubble2':
        if (this.bubble2 == number)
          switch (this.bubble2) {
            case 0:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'social' } })
              break;
            case 1:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'tech' } })
              break;
            case 2:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'social' } })
              break;
            case 3:
              this.router.navigate(["/special-designed-test"], { queryParams: { type: 'tech' } })
              break;

            default:
              break;
          }
        break;
      case 'bubble4':

        break;

      default:
        break;
    }
  }

}
