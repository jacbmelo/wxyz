import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  onUpdate(id, type, text) {
  	this.mail.update(id, type, text);
  }

  constructor(@Inject('mail') private mail) {}
}
