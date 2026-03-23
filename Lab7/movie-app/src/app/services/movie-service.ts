import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Makes this service available app-wide without needing to add it to a module's providers
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient : HttpClient){  }

  // Calls the OMDB API to search for Shrek movies and returns the response as an Observable
  GetMovieData() : Observable<any>{
    return this.httpClient.get("https://www.omdbapi.com/?i=tt3896198&apikey=10c8e0b2&s=%27shrek%27");
  }
}