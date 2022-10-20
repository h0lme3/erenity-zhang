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



@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
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
        label: "Yes, I think it is a very serious problem",
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Yes, I think it is a very serious problem",
      },
      {
        label: "I think cyberattacks have a limited impact",
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I think cyberattacks have a limited impact"
      },
      {
        label: "I don’t care as long as I can have my own life",
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I don’t care as long as I can have my own life"
      }
    ],
    [
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
      }
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value:"Bad premises, misunderstanding to this population"
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Lack of empathy for this population hence feels not able to help them",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Interpersonal communication failed",
      },
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I’d like to help them transition",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I am hesitant to work on that because of the unfamiliarity to them",
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
        value: "To support"
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
        value: "Never for this reason, but I worry about our common future",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I have hope in security",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "I am not concerned about our future",
      }
    ],
    [
      {
        label: "Yes, I think safety is extremely important",
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Yes, I think safety is extremely important",
      },
      {
        label: "No, I can work out a way to provide comfortable environment with my clients",
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "No, I can work out a way to provide comfortable environment with my clients",
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
        value: ">6",
      }
    ],
    [
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "Yes",
      },
      {
        label: null,
        type: 'choose',
        placeholder: null,
        formControlName: 'answer',
        value: "No",
      },
    ],

  ]

  content = [
    {
      question: 'How many years have you been working in social sector?',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Do you know cyberattacks diminish democracy?',
      note: '',
      isShowNote: false,
      isShowButton: true,
    },
    {
      question: 'To what extent do you want to make this world better?',
      note: '',
      isShowNote: false,
      isShowButton: true,
      layout: 'column'
    },
    {
      question: 'What’s your toughest moment when dealing with a target population related to your job?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'What do you like to help improve if you were to know the target population are hackers that have never integrated into normal societies?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'What’s the main reason for you to look at E-renity?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Have you been worried about the future after Covid because of the volume of cyberattacks?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Do you think the safety of community provided on social media platforms are crucial to your job?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'How professional would your rank your communication performance if you are to talk to marginalized individuals with a criminal background?',
      note: '',
      isShowNote: false,
      isShowButton: true,
      layout: 'column'
    },
    {
      question: 'Are you willing to work for us with challenges ahead? (which were already indicated in these questions!)',
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
   

    if(stepper){
     if(stepper.selectedIndex == 9 ){
        if(event.formGroup.value.answer == 'Yes' ){
          this.dialog.open(WelcomeComponent,{
            width:"550px",
            panelClass:"welcome-popup",
            data:{
              showSignUpButton:false,
              showButton:true
            }
          }).afterClosed().subscribe(res => {
            this.router.navigate(['/bridging-program']);
          });
          
        }else{
          stepper.selectedIndex = 5;
          return;
        }
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
