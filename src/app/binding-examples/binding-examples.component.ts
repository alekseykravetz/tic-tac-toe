import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.css']
})
export class BindingExamplesComponent implements OnInit {

  newColor: string;
  color: string;

  constructor() { }

  ngOnInit() {
  }

  test() {
    this.color = 'alex';
  }

  colorChange(value) {
    this.newColor = value;
  }

}
