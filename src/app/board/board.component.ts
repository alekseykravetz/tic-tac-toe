import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {

  currentPlayer = true;
  board = [
    [{ value: null }, { value: null }, { value: null }],
    [{ value: null }, { value: null }, { value: null }],
    [{ value: null }, { value: null }, { value: null }],
  ];


  gameId: string;

  constructor(
    private db: AngularFirestore) {
  }

  doTurn(cell) {
    if (cell.value !== null) {
      return;
    }
    cell.value = this.currentPlayer;
    this.currentPlayer = !this.currentPlayer;




    this.gameToState();

  }

  createGame() {
    const id = 'alexDoc'; // this.db.createId();
    const game = {
      id: id,
      currentPlayer: this.currentPlayer,
      boardCells: [null, null, null, null, null, null, null, null, null],
    };
    this.db.collection('/games').doc(id).set(game);

  }

  joinGame() {

    this.db.collection<IGame>('/games').valueChanges().subscribe(games => {
      const lastGame = games.pop();

      this.db.collection('games').doc<IGame>(lastGame.id).valueChanges().subscribe(game => {
        this.gameFromState(game);
      });

    });
  }

  private gameFromState(game: IGame) {
    this.gameId = game.id;
    this.currentPlayer = game.currentPlayer;

    this.board = [
      [{ value: game.boardCells[0] }, { value: game.boardCells[1] }, { value: game.boardCells[2] }],
      [{ value: game.boardCells[3] }, { value: game.boardCells[4] }, { value: game.boardCells[5] }],
      [{ value: game.boardCells[6] }, { value: game.boardCells[7] }, { value: game.boardCells[8] }],
    ];

  }

  private gameToState() {

    const boardState = [
      this.board[0][0].value, this.board[0][1].value, this.board[0][2].value,
      this.board[1][0].value, this.board[1][1].value, this.board[1][2].value,
      this.board[2][0].value, this.board[2][1].value, this.board[2][2].value,
    ];

    const game = {
      id: this.gameId,
      currentPlayer: this.currentPlayer,
      boardCells: boardState,
    };
    this.db.collection('/games').doc(this.gameId).set(game);


  }
}

interface IGame {
  id: string;
  currentPlayer: boolean;
  boardCells: boolean[];
}
