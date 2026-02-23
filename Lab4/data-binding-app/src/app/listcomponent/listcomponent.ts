import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  imports: [],
  templateUrl: './listcomponent.html',
  styleUrl: './listcomponent.css',
})
export class Listcomponent {
  presidents:any[] = [{name: "Higgins", term:"2011-"},{name: "McAleese", term:"1997-2011"},{name: "Robinson", term:"1990-1997"},{name: "Hillery", term:"1976-1990"},{name: "O Dalaigh", term:"1974-1976"}];
  //having any and assigning it variables creats a blank object array which we only access through
  //presidents[i]
  //in data binding it is 
  /*@for (president of presidents; track president){
    <li>{{president.name}} : {{president.term}}</li>
}*/
}
