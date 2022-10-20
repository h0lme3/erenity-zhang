import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    pd: new FormControl('', Validators.required),
  })
  errorValid: boolean = false
  constructor(
    private dialog: MatDialog,
    private general: GeneralService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(res => { this.removeIncorrectValidation(); })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.username == 'elisabeth' && this.loginForm.value.pd == "12345678") {
        this.general.setLoading(true)
        this.general.setLocalStorage("UD", this.loginForm.value)
        this.general.setLocalStorage("firstlogin", true)
        debugger
        this.router.navigate(['/dashboard']);
        this.general.setLoading(false)
          this.errorValid = false
        this.setValidManually(false);
      } else {
        this.errorValid = true
        this.setValidManually(true);
      }
    }
  }

  private removeIncorrectValidation() {
    if (this.loginForm.get("pd").hasError("incorrect"))
      this.loginForm.get("pd").setErrors(null);
    if (this.loginForm.get("username").hasError("incorrect"))
      this.loginForm.get("username").setErrors(null);
  }

  private setValidManually(valid) {
    this.loginForm.get("username").setErrors({ 'incorrect': valid });
    this.loginForm.get("pd").setErrors({ 'incorrect': valid });
  }
}
