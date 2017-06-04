import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Auth } from './auth';

@Injectable()
export class AuthService {

  constructor(public http: Http){ }

  isLoggedIn: boolean = false;
  private url = 'http://academika.app/api/login';

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username: string, password:string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, { username, password }, options)
                    .map(data => {
                      let res = data.json();
                      if (res.status == true) {
                        localStorage.setItem('currentUser', JSON.stringify(res.data));
                        return this.isLoggedIn = true;
                      }
                    });
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  getLoggedUser(): void {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
