import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Contants } from '../constants/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  urlBase = environment.API_URL
  url = Contants.POPULAR_MOVIES

  constructor(private http: HttpClient) {

  }

  getMovies() {
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + environment.ACCESS_TOKEN
      }
    }
  
    return this.http.get<any>(this.urlBase + this.url, options)
  }
}
