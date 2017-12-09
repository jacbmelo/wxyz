import { Component, Inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'WXYZ';

  onUpdate(id, type, text) {
    this.mail.update(id, type, text);
  }

  constructor(@Inject('mail') private mail) {}
}
