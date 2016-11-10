import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

//Import ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


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
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {provide: 'mail', useClass:MailService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
