import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hello, World!';
  subtitle = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';

  onUpdate(id, type, text) {
  	this.mail.update(id, type, text);
  }

  constructor(@Inject('mail') private mail) {}
}
