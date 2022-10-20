import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  loading = new BehaviorSubject(false);
  loadCount = 0;
  kyEn = "keyEncription";
  loadingDesc: Array<string> = [];
  loadingDescArray: any = new BehaviorSubject([]);

  constructor(private router: Router) { }

  setLoading(bool: boolean) {
    if (bool) {
      this.loadCount++;
      this.loading.next(true);
    } else {
      this.loadCount--;
      this.deleteLastLoadingDesc();
      if (this.loadCount <= 0) {
        this.loadCount = 0;
        this.loading.next(false);
        this.forceStopLoading();
      }
    }
  }

  setLoadingDescription(text: string | null) {
    if (text == null) {
      this.loadingDesc.push(this.loadingDesc[this.loadingDesc.length - 1]);
      this.loadingDescArray.next(this.loadingDesc);
    } else {
      this.loadingDesc.push(text);
      this.loadingDescArray.next(this.loadingDesc);
    }
  }

  deleteLastLoadingDesc() {
    this.loadingDesc.pop();
    this.loadingDescArray.next(this.loadingDesc);
  }

  getLastLoadingDesc() {
    if (this.loadingDesc.length == 0) {
      return "";
    } else {
      return this.loadingDesc[this.loadingDesc.length - 1];
    }
  }

  forceStopLoading() {
    this.loadCount = 0;
    this.loading.next(false);
  }

  goTo(pages = "/", id = null) {
    this.router.navigate([pages], { queryParams: { id: id } })
  }

  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  setLocalStorage(name, data) {
    let dt2 = JSON.stringify(data);
    window.localStorage.setItem(name, this.encrypt(dt2));
  }

  getLocalStorage(name) {
    let dt = this.decrypt(window.localStorage.getItem(name));
    return JSON.parse(dt);
  }

  deleteLocalStorage(name) {
    window.localStorage.removeItem(name);
  }

  encrypt(data) {
    let result = CryptoJS.AES.encrypt(data.trim(), this.kyEn.trim()).toString();
    return result;
  }

  decrypt(data) {
    let result;
    if (data == null || data == undefined) {
      result = data;
    } else {
      result = CryptoJS.AES.decrypt(data.trim(), this.kyEn.trim()).toString(CryptoJS.enc.Utf8);
    }
    return result;
  }


  collapse:Subject<boolean> = new BehaviorSubject(this.getLocalStorage("menuCollapse") != undefined? JSON.parse(this.getLocalStorage("menuCollapse")):false);
  setMenuCollapse(data){
    this.collapse.next(data);
    this.setLocalStorage("menuCollapse",data);
  }



}
