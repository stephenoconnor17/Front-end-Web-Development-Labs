import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcomponent } from './listcomponent/listcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('data-binding-app');

  //init
  pressed : number = 0;
  hide : boolean = false;

  //button press function to increment counter
  addToAmt(){
    this.pressed++;
  }

  //function called when dbl click of star
  onDblClick(){
    if(this.hide){
      this.hide = false;
    }else{
      this.hide = true;
    }
    
  }
}