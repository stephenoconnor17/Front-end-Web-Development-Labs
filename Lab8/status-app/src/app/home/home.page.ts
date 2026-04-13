import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink ,IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton],
})
export class HomePage {
  status:string = "";
  constructor(private storage: Storage) {}

  //lifetime hook from ionic - similar to ngOnInit
  async ionViewWillEnter(){
    //create creates storage only if it doesnt exist.
    await this.storage.create();
    //storage.get and .set is basically a hashmap.
    this.status = await this.storage.get('myStatus');
  }
}
