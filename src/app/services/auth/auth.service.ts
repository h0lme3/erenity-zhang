import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private general: GeneralService, private route: Router) { }

  async logout() {
    this.general.setLoading(false);
    this.general.deleteLocalStorage("UD");
    setTimeout(async () => {
      this.route.navigate(['/']).then(() => {
        window.location.reload()
      });
    }, 400);
  }
}
