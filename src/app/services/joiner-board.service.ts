import { Injectable } from '@angular/core';
import { AccessService } from './access.service';

@Injectable({
  providedIn: 'root'
})
export class JoinerBoardService {


  url: string = "/joinerBoardData"
  constructor(private _access: AccessService) { }

  post(parameter: any, loadingDesc = "Saving Joiner Data") {
    return this._access.httpPost(this.url, parameter, loadingDesc);
  }

  put(param: any, loadingDesc = "Saving Joiner Data") {
    return this._access.httpPut(this.url, param, loadingDesc);
  }

  async getAttachment(parameter = {}) {
    return this._access.httpGetFullWithArrayBuffer(this.url, parameter);
  }

  async downloadMultipleAttachments(parameter, loadingDesc = "Getting Attachments ") {
    return this._access.httpGet(this.url, parameter, loadingDesc);
  }

  delete(param: any, loadingDesc = "Deleting") {
    return this._access.httpDelete(this.url, param, loadingDesc);
  }

  // 62135e5873c2368ddd62d229
}
