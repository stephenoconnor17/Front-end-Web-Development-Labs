import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{ //ONINIT IS AN EVENT THAT CALLS ONCE ON INITALIZATION, calls ngOnInit method
  students : any[] = []; // local arr for data binding
  weatherElements : any[] = [];

  constructor(private ds : DataService){} // dataservice injecting

  ngOnInit(): void {
    this.ds.GetStudentData().subscribe( // .subscribe allows asynchronous calls
      (data)=>{
        this.students = data.students; // data represents the api call, and accessible are its elements.
        console.log(this.students); // test console print
      }
    );

    this.ds.GetWeatherData().subscribe( // .subscribe allows asynchronous calls
      (data)=>{
        this.weatherElements = data.weather; // assign using array because weather is an  array in json
        console.log(this.weatherElements); // test console print
      }
    );
  }
}
