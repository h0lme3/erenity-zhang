import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralService } from './general/general.service';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  constructor(
    private general: GeneralService,
    private http: HttpClient,) { }

  host() {
    return environment.apiHosting;
  }

  getHeader() {
    let headAuth = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return headAuth;
  }

  httpGet(url, param: any = {}, loadingDesc = "", tmout = 2 * 60 * 1000) {
    param = this.checkQueryString(param);
    this.general.setLoadingDescription(loadingDesc);
    let hdr = {
      headers: this.getHeader(),
      params: param,
      reportProgress: true
    }

    return new Promise((resolve, reject) => {
      this.http.get(this.host() + url, hdr).pipe(timeout(tmout))
        .subscribe(
          (resp: any) => { resolve(resp) },
          (err: any) => { reject(err.error.errorObject ? err.error.errorObject.message : err.error.message) }
        )
    });
  }

  httpPost(url, param, loadingDesc = "", tmout = 2 * 60 * 1000) {
    this.general.setLoadingDescription(loadingDesc);
    let hdr = {
      headers: this.getHeader(),
      reportProgress: true
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.host() + url, param, hdr).pipe(timeout(tmout))
        .subscribe(
          (resp: any) => { resolve(resp) },
          (err: any) => { reject(err.error.errorObject ? err.error.errorObject.message : err.error.message) }
        )
    });
  }

  httpPut(url, param, loadingDesc="", tmout=2*60*1000){
    this.general.setLoadingDescription(loadingDesc);
    let hdr = {
      headers : this.getHeader(),
    }

    return new Promise((resolve, reject)=>{
      this.http.put(this.host()+url, param, hdr).pipe(timeout(tmout))
      .subscribe(
        (resp:any)=>{resolve(resp)},
        (err:any)=>{reject(err.error.errorObject?err.error.errorObject.message:err.error.message)}
      )
    });
  }

  httpDelete(url, param, loadingDesc="", tmout=2*60*1000){
    this.general.setLoadingDescription(loadingDesc);
    let hdr = {
      headers : this.getHeader(),
      body: param 
    }
    return new Promise((resolve, reject)=>{
      this.http.delete(this.host()+url,  hdr).pipe(timeout(tmout))
      .subscribe(
        (resp:any)=>{resolve(resp)},
        (err:any)=>{reject(err.error.errorObject?err.error.errorObject.message:err.error.message)}
      )
    });
  }

  httpGetFullWithArrayBuffer(url, param: any = {}, loadingDesc = "") {
    param = this.checkQueryString(param);
    this.general.setLoadingDescription(loadingDesc);
    // let token = this.general.getToken();
    return new Promise((resolve, reject) => {
      this.http.get(this.host() + url, {
        // headers:new HttpHeaders({'X-AUTH-TOKEN': token, }), 
        observe: 'response',
        responseType: 'arraybuffer' as 'arraybuffer',
        params: param
      }).subscribe(
        (resp: any) => { resolve(resp) },
        (err: any) => {
          reject(err.error.message)
        }
      )
    });
  }

  checkQueryString(param) {
    if (param.queryString != undefined) {
      if (typeof param.queryString != "string") {
        let strng = "";
        for (let str in param.queryString) {
          if (param.queryString.hasOwnProperty(str)) {
            if (param.queryString[str] != undefined) {
              if (typeof param.queryString[str] == "string") {
                strng += str + ":" + param.queryString[str].replace(/,/g, "^") + ";";
              } else {
                param.queryString[str] = param.queryString[str].map(mp => { return (typeof mp == 'string' ? mp.replace(/,/g, "^") : mp.toString().replace(/,/g, "^")) })
                strng += param.queryString[str].length == 0 ? "" : `${str}:${param.queryString[str].toString()};`;
              }
            }
          }
        }
        param.queryString = strng;
      }
    }
    return param;
  }

}
