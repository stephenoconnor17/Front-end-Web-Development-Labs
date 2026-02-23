import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Listcomponent } from './app/listcomponent/listcomponent';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  
bootstrapApplication(Listcomponent, appConfig)
  .catch((err) => console.error(err));
  