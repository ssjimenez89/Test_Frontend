import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUnsplashService {
 // tslint:disable-next-line:max-line-length
  public apiUrl = 'https://api.unsplash.com/search/photos?client_id=c75f2a801603a5254dd392370536e8c248d379a70fafe23517dfa312fcddc464&client_secret=06735c1129f1bf1cdabaf650109fd82281f3094adc1573ba07e932bcc1853587?&per_page=100&query=hero';

  constructor(public http: HttpClient) {
    this.getDataApi();
  }

  getDataApi() {
      return this.http.get(this.apiUrl);
  }
}
