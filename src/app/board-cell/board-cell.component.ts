import { Component, Input } from '@angular/core';
import { ECellStates } from '../enum-cell-states';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css'],
})
export class BoardCellComponent {

  @Input() value: any;

  constructor() { }

}
