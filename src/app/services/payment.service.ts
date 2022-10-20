import { Injectable } from '@angular/core';
import { AccessService } from './access.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url: string = "/sendSubscribeEmail"
  constructor(private _access: AccessService) { }

  post(parameter: any, loadingDesc = "Loading Please Wait") {
    return this._access.httpPost(this.url, parameter, loadingDesc);
  }
}
