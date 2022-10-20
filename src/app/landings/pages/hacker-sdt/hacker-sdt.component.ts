import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GeneralService } from 'src/app/services/general/general.service';
import { AllDialog } from '../../shared/dialog/allDialog/allDialog';
import {WelcomeComponent} from 'src/app/dashboard/dialog/welcome/welcome.component';
import {environment} from 'src/environments/environment'
import {ThankyouComponent} from './dialog/thankyou/thankyou.component'

@Component({
  selector: 'app-hacker-sdt',
  templateUrl: './hacker-sdt.component.html',
  styleUrls: ['./hacker-sdt.component.scss']
})
export class HackerSdtComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  firstFormGroup: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  secondFormGroup: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  thirdFormGroup: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  FormGroup4: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  FormGroup5: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  FormGroup6: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  FormGroup7: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  FormGroup8: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  FormGroup9: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });
  FormGroup10: FormGroup = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });

  answers = [
    [{
      label: 'Number of years',
      type: 'number',
      placeholder: 'state a value',
      formControlName: 'answer',
      error: 'Please provide number of years'
    }],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 0,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 1
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 2
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 3
      },
      {
        label: "Otherwise, please state a value",
        type: 'number',
        placeholder: null,
        formControlName: 'answer',
        error: 'Please provide a value'
      },
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I like it based on interest and on an available basis",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I sometimes feel too tired of it",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I do it for a living and don’t mess around with my business.",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I’m adaptable.",
      },
    ],
    [
      {
        label: "Please provide an answer",
        type: 'text',
        placeholder: null,
        formControlName: 'answer',
      },
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "In social ",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "In tech",
      },
      {
        label: "Something else:",
        type: 'text',
        placeholder: null,
        formControlName: 'answer',
      },
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "To hack you",
        dialog: "(go to our assessment page to do hacking) —-> provide datas to our partners. Only need a cookie."
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "To see what’s up there"
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "To find opportunities to transition",
        dialog: " transition program (led by AI first and then individuals in groups)"
      },
      {
        label: "To learn about a part of E-renity, state which part:",
        type: 'text',
        placeholder: "What do you think of it?",
        formControlName: 'answer',
      },
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Never",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Once per month",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Once per week",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Once per a few days",
      },
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "No",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Not sure if I have depression",
        dialog: "Would you be willing to do a psychological assessment (2min)"

      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I’m offended by this question",
        dialog: "I’m sorry!"
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Why would I worry anything at all?",
      },
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 0,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 1,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 2,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 3,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 4,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 5,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 6,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 7,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 8,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 9,
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: 10,
      },
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Yes, I'd love to",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "No for now",
      },
    ],

  ]

  content = [
    {
      question: 'How many years have you been hacking on the Clearnet?',
      note: true,
      isShowNote: true,
      isShowButton: true
    },
    {
      question: 'How many times have you read “The Matrix”?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'To what extent do you want to take hold of your hacking business?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'What’s your longest hour on the record to work on a hack, be it a server, or others?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'What do you like to do if you have never become a hacker?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'What’s the main reason for you to look at E-renity? ',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Have you been to outdoors often as a hacker (before Covid) <br> <span class="text-reddish"> Sorry if this gets psychological, and yes it will, start from here.</span>',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Does symptoms of depression worry you?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'How professional would your rank your hacking skills? (Compared to others — how many hackers on the dknt?)',
      note: '',
      isShowNote: false,
      isShowButton: true,
      layout: 'column'
    },
    {
      question: 'Are you willing to work for us if we still give you the anonymity but something other than “Matrix”?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },

  ]

  isEditable = true;
  constructor(private general: GeneralService, private dialog: MatDialog, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.general.forceStopLoading()
    }, 1000);
  }

  async updateResult(event, stepper=undefined) {


    if (event.formGroup.value.answer == 'Not sure if I have depression') {
      let dialogRef = await this.dialog.open(AllDialog, {
        width: '450px',
        data: { header: "", isHeaderIcon: true, message: "Would you be willing to do a psychological assessment (2min)?", showNoBtn: true, btnOk: "Yes" }
      })
      return dialogRef.afterClosed().subscribe(res => {
        if (res == true) {
          this.router.navigate(['/psychological-assesment']);
        } else {
          this.myStepper.next()
        }
      })
    }
    if (event.formGroup.value.answer == 'I’m offended by this question') {
      let dialogRef = await this.dialog.open(AllDialog, {
        width: '450px',
        data: { header: "", isHeaderIcon: true, message: "I’m sorry!", showNoBtn: false }
      })
      return dialogRef.afterClosed().subscribe(res => {
        this.myStepper.next()
      })
    }
    if(event.formGroup.value.answer === 'Why would I worry anything at all?'){
      let dialogRef = await this.dialog.open(AllDialog, {
        width: '450px',
        data: { header: "", isHeaderIcon: true, message: "Continue", showNoBtn: false }
      })
      return dialogRef.afterClosed().subscribe(res => {
        this.router.navigate(['./inProgress'])
      })
    }

    if (event.formGroup.value.answer == 'To hack you') {
      this.router.navigate(['/hack-assesment'])
    }
    if(event.formGroup.value.answer === 'To find opportunities to transition'){
      this.router.navigate(['/transition-program'])
    }

    if(stepper){
      if(stepper.selectedIndex == 5 &&
         event.formGroup.value.answer !== 'To hack you' && 
         event.formGroup.value.answer !== 'To find opportunities to transition'&& 
         event.formGroup.value.answer !== ''
      ){
        this.dialog.open(ThankyouComponent, {
          width: '450px',
          data:{
            
          }
        })
      }
    }

    return this.myStepper.next()
  }

  stepChange(event, stepper){
    console.log(event.selectedStep.stepControl, stepper)
  }

  onGoBackToHome() {
    this.general.setLoading(false);
    this.general.deleteLocalStorage("UD");
    this.router.navigate(["/"])
  }

  onGoToSignUp() {
    this.general.setLoading(false);
    this.router.navigate(["/signup"])
  }



  showThankPopup(){
    this.dialog.open(WelcomeComponent,{
      width:"550px",
      panelClass:"welcome-popup",
      data:{
        showSignUpButton:true
      }
    }).afterClosed().subscribe(()=>{
      // this.general.setLocalStorage("firstlogin",false)
    })
  }



}

