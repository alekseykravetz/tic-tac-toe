import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  currentPlayer = true;
  board = [
    [{ value: null }, { value: null }, { value: null }],
    [{ value: null }, { value: null }, { value: null }],
    [{ value: null }, { value: null }, { value: null }]
  ];

  constructor() {
  }

  ngOnInit() {
  }

  doTurn(cell) {
    if (cell.value !== null) {
      return;
    }
    cell.value = this.currentPlayer;
    this.currentPlayer = !this.currentPlayer;
  }
}
