import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoopBackAuth } from '../../../api-sdk';
import { Observable } from 'rxjs/Observable';

export enum AuthTypes {
  AUTH_LOCAL,
  AUTH_LDAP,
}

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private auth: LoopBackAuth,
  ) { }

  login(authType: AuthTypes, credentials: any): Observable<any> {
    const config = (window as any).config.authPath;
    const _url = authType === AuthTypes.AUTH_LOCAL ? config.local : config.ldap;
    return this.http
      .post(_url, credentials)
      .map((response: any) => {
        response.ttl = parseInt(response.ttl, 10);
        this.auth.setToken(response);
        return response;
      });
  }
}
