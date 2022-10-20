import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GeneralService } from 'src/app/services/general/general.service';
import { Answers } from '../../shared/components/sdt-question-box/models/answers';
import { AllDialog } from '../../shared/dialog/allDialog/allDialog';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
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

  answers: Answers = [
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
      question: 'Do you keep your passwords simple and the same for a long time?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Do you use an online dating platform and you don’t know that every message you send can be read by hackers?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Do you still trust common anti-virus softwares?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Do you ignore incidences of accounts signing out?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Do you feel watched online and/or have already been a victim of cyberstalking?',
      note: '',
      isShowNote: false,
      isShowButton: true
    },
    {
      question: 'Do you want to improve your cybersecurity as a tech professional?',
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

  async updateResult(event) {
    switch (event.content.question) {
      case 'Do you keep your passwords simple and the same for a long time?':
        if (event.formGroup.value.answer == 'Yes') {
          return this.router.navigate(['/inProgress'])
        }
        break;

      case 'Do you use an online dating platform and you don’t know that every message you send can be read by hackers?':
        if (event.formGroup.value.answer == 'Yes') {
          let dialogRef = this.dialog.open(AllDialog, {
            width: '450px',
            data: {
              isHeaderIcon: true,
              message: "Please take our SDT and join an individually tailored program to learn how to protect yourself online!",
              showNoBtn: true,
              btnOk: 'Ok, sure'
            }
          })
          return dialogRef.afterClosed().subscribe(res => {
            if (res)
              this.router.navigate(['/special-designed-test'], { queryParams: { type: 'Social Sector Professionals' } })
            else
              this.myStepper.next()
          })
        }
        break;

      case 'Do you still trust common anti-virus softwares?':
        if (event.formGroup.value.answer == 'Yes') {
          let dialogRef = this.dialog.open(AllDialog, {
            width: '450px',
            data: {
              isHeaderIcon: true,
              message: "Please take our SDT, current demand for cybersecurity is beyond what anti-virus softwares can control, then cite vulnerability database website such as NIST",
              showNoBtn: true,
              btnOk: 'Ok, sure'
            }
          })
          return dialogRef.afterClosed().subscribe(res => {
            if (res)
              this.router.navigate(['/special-designed-test'], { queryParams: { type: 'Tech Sector' } })
            else
              this.myStepper.next()
          })
        }
        break;

      case 'Do you ignore incidences of accounts signing out?':
        if (event.formGroup.value.answer == 'Yes') {
          let dialogRef = this.dialog.open(AllDialog, {
            width: '450px',
            data: {
              isHeaderIcon: true,
              message: "Please take our SDT, Sometimes accounts signing out is a sign of hacking not internet instability!",
              showNoBtn: true,
              btnOk: 'Ok, sure'
            }
          })
          return dialogRef.afterClosed().subscribe(res => {
            if (res)
              this.router.navigate(['/special-designed-test'], { queryParams: { type: 'Tech Sector' } })
            else
              this.myStepper.next()
          })
        }
        break;

      case 'Do you feel watched online and/or have already been a victim of cyberstalking?':
        if (event.formGroup.value.answer == 'Yes') {
          return this.router.navigate(['/special-designed-test'], { queryParams: { type: 'Victim Sector' } })
        }
        break;

      case 'Do you want to improve your cybersecurity as a tech professional?':
        if (event.formGroup.value.answer == 'Yes') {
          return this.router.navigate(['/special-designed-test'], { queryParams: { type: 'Tech Sector' } })
        }
        break;

      default:
        break;
    }

    return this.myStepper.next()

  }

  onGoBackToHome() {
    this.general.setLoading(false);
    this.general.deleteLocalStorage("UD");
    this.router.navigate(["/"])
  }

}
