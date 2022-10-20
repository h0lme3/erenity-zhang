import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showPassword:boolean = false;
  showConfPassword:boolean = false;

  signUpForm = new FormGroup({
    email: new FormControl("", Validators.required),
    pd: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]),
    cpd: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]),
  })
  errorValid: boolean = false
  constructor(
    private dialog: MatDialog,
    private general: GeneralService,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpForm.valueChanges.subscribe(res => { 
      this.checkDifferentPassword()
      this.removeIncorrectValidation(); 
    })
  }

  checkDifferentPassword(){
    if(this.signUpForm.getRawValue().cpd !== ""){
      if(this.signUpForm.getRawValue().pd === this.signUpForm.getRawValue().cpd){
        this.signUpForm.get("cpd").setErrors({'notsame': false})
      }else{
        this.signUpForm.get("cpd").setErrors({'notsame': true})
      }
    }
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.general.setLoading(true)
      // this.general.setLocalStorage("UD", this.signUpForm.value)
      debugger
      this.router.navigate(['/'])
      this.errorValid = false
      this.setValidManually(false);
      
    }
  }

  private removeIncorrectValidation() {
    if (this.signUpForm.get("pd").hasError("incorrect"))
      this.signUpForm.get("pd").setErrors(null);
  }

  private setValidManually(valid) {
    this.signUpForm.get("pd").setErrors({ 'incorrect': valid });
  }

}
