import { ICredentials } from './credentials';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginVerificationService {
 public _url = "/assets/data/credentials.json";
  constructor(private http:HttpClient) { }

  getCredentials():Observable<ICredentials[]>
  {
    return this.http.get<ICredentials[]>(this._url);
  }
}
