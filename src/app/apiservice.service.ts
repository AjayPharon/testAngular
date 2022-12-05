import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imovie } from './imovie';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http : HttpClient) { }
   
  getData(id : string) : Observable<Array<Imovie>> {
    return this.http.get<Array<Imovie>>(`https://638492184ce192ac605bc39a.mockapi.io/Movie/`+id)
  }
}
