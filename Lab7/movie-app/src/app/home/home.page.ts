import { Component } from '@angular/core';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie-service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  movies:any[]=[];

  constructor(private movieService : MovieService) {}

  // Lifecycle hook that fires each time the page is about to be displayed
  ionViewWillEnter(){
    // Subscribe to the movie service and store the results array
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
        console.log(this.movies);
      }
    );
  }
}