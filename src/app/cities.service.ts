import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CityInterface} from './interfaces/citi';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  URL = "http://localhost:8080/cities";

  constructor(private _http:HttpClient) { }

  getCities():Observable<any[]>{
    return this._http.get<CityInterface[]>(this.URL);
  }

}
