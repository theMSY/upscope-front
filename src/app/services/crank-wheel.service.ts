import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CrankWheelService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  all() {
    return this.httpClient.get(environment.url + '/crank-wheel/managers');
  }

  url(email) {
    return this.httpClient.post(environment.url + '/crank-wheel/url', {email});
  }

  submitEmail(email){
    return this.httpClient.post(environment.url+'/crank-wheel/user',{email})
  }
}
