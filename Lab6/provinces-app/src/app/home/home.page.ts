import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
//use links through router link and router imports
//router import is injected into constructor
//router link is an attribute used like [router-link]=['/page-name'];

export class HomePage {
  constructor() {}
}
