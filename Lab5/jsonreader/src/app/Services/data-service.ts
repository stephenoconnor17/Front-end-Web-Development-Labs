import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/*
A data class is sort of like
A static handler that isnt instantiated
*/

export class DataService {
  constructor(private httpClient : HttpClient){} //using injecting, the parameter here is actually instantiated 
                                                //so we dont need to explicityly create it.
  GetStudentData() : Observable<any>{
    return this.httpClient.get('https://api.jsonblob.com/019caf0e-931f-7217-9577-b8c04cbda67c');
  }//return a type oberservable which in this case will be json

  GetWeatherData() : Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=b1305e0508729c998cc6c7550a620f8b');
  }
}
