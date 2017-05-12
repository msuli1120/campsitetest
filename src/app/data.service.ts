import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ApiKeys } from './apiKeys';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http, private apikeys: ApiKeys ) { }

  fetchData(city: string) {
    return Observable.forkJoin(
      this.http.get('https://ridb.recreation.gov/api/v1/recareas?apikey=' + this.apikeys.myApi).map(
        (res) => res.json()),
      this.http.get('https://ridb.recreation.gov/api/v1/recareaaddresses?apikey=' + this.apikeys.myApi).map(
        (res) => res.json()),
      this.http.get('https://ridb.recreation.gov/api/v1/campsites?apikey=' + this.apikeys.myApi).map(
        (res) => res.json()),
      this.http.get('https://ridb.recreation.gov/api/v1/organizations?apikey=' + this.apikeys.myApi).map(
        (res) => res.json()),
      this.http.get('http://api.amp.active.com/v2/search/?near=' + city + '&current_page=1&per_page=20&exclude_children=true&api_key=' + this.apikeys.campGroundApi).map(
        (res) => res.json())
    );
  }

}
