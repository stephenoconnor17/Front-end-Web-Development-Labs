import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {A} from './a/a';
import {B} from './b/b';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, A, B],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  name:string = "Stephen";
  age:number = 21;
}
