import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.page.html',
  styleUrls: ['./status-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonButtons, IonBackButton]
})
export class StatusPagePage implements OnInit {

  status:string = "";
  constructor(private storage:Storage) { }

  ngOnInit() {

  }

  async saveStatus(){
    await this.storage.create();
    await this.storage.set('myStatus', this.status);
  }

  
  //lifetime hook from ionic - similar to ngOnInit
  async ionViewWillEnter(){
    //create creates storage only if it doesnt exist.
    await this.storage.create();
    //storage.get and .set is basically a hashmap.
    this.status = await this.storage.get('myStatus');
  }
}
