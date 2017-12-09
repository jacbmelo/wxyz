import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  @Input()
  public value;

  @Output()
  update = new EventEmitter();

  ngOnInit() {
  }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  isValid() {
     if (this.value.length > 0) {
       return true;
     }
     return false;
  }

}
