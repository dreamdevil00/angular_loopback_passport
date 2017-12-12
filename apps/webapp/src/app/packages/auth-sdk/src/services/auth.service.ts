import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User, UserApi, LoopBackConfig } from '../../../api-sdk';
import { Observable } from 'rxjs/Observable';

export enum AuthTypes {
  AUTH_LOCAL,
  AUTH_LDAP,
}

export interface UserInfo {
  authType: AuthTypes;
  userId: string;
  access_token: string;
}

const  storagePrefix = '$AuthDemo_';
export const localStorageInfo = `${storagePrefix}User`;

@Injectable()
export class AuthService {
  private user: UserInfo = {
    authType: null,
    userId: '',
    access_token: '',
  };

  constructor(
    private http: HttpClient,
  ) { }

  login(authType: AuthTypes, credentials: any) {
    switch (authType) {
      case AuthTypes.AUTH_LOCAL:
        return this.http.post((window as any).config.authPath.local, credentials);
      case AuthTypes.AUTH_LDAP:
        return this.http.post((window as any).config.authPath.ldap, credentials);
      default:
        return Observable.of({});
    }
  }

  logout(): Observable<any> {
    if (this.isAuthenticated()) {
      console.log('Logging out...');
      const url = LoopBackConfig.getPath() + '/' + LoopBackConfig.getApiVersion()
        + '/Users/logout' + `?access_token=${this.user.access_token}`;
      return this.http.post(url, {});
    } else {
      return Observable.of({});
    }
  }

  isAuthenticated() {
    const info = window.localStorage.getItem(localStorageInfo);
    if (!this.user.userId && info) {
      this.user = JSON.parse(info);
    }
    return this.user.userId ? this.user : false;
  }

  setUser(res: UserInfo) {
    window.localStorage.setItem(localStorageInfo, JSON.stringify(res));
    return new Promise((resolve) => {
      this.user = res;
      resolve(this.user);
    });
  }

  removeUser() {
    window.localStorage.removeItem(localStorageInfo);
    this.user = {
      authType: null,
      userId: '',
      access_token: '',
    };
  }
}
