import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UpscopeService {

  constructor(
    private httpClient : HttpClient
  ) { }



  all(){
    return this.httpClient.get(environment.url + '/clients');
  }


  generateWatchUrl(id){
    return this.httpClient.get(environment.url + '/clients/'+id+'/watch');
  }
}
