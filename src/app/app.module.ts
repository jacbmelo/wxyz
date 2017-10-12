import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Import ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDulgzz463UK_d1AswR62gokUhDjB36Lrs',
  authDomain: 'wxyzapp.firebaseapp.com',
  databaseURL: 'https://wxyzapp.firebaseio.com',
  projectId: 'wxyzapp',
  storageBucket: 'wxyzapp.appspot.com',
  messagingSenderId: '944814887763'
};

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    {provide: 'mail', useClass:MailService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

