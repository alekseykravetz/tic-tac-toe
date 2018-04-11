import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = 'blue';
  board = [
    [true, false, true],
    [false, true, false],
    [true, false, true]
  ];
}
