import { Injectable } from '@angular/core';
import { Game } from '@web-app/modules/game';
import { GameStore } from '@web-app/store/game-store';
import { distinctUntilChanged, filter, map, skip, switchMap } from 'rxjs';
import { TurnsManagerService } from '@web-app/services';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {
  players$ = this.game$.pipe(map((game) => game.players));

  isHumanTurn$ = this.turn$.pipe(
    map((turnIndex) => this.turn$.isHumanTurn(turnIndex)),
    distinctUntilChanged()
  );

  endOfGame$ = this.game$.pipe(
    map((game) => {
      const visible = game.board?.visible?.length || 0;
      return visible <= 1;
    })
  );

  winner$ = this.endOfGame$.pipe(
    skip(1),
    filter((isEnd) => isEnd),
    switchMap(() => this.isHumanTurn$),
    map((isHuman) => isHuman ? 'Player lose!' : 'PC lose!')
  );

  constructor(readonly game$: GameStore, readonly turn$: TurnsManagerService) { }

  provideGame(game: Game): void {
    this.game$.next(game);
  }

  addPlayer(name: string): void {
    const game = this.game$.getValue();

    game.registerPlayer(name);

    this.game$.next(game);
  }

  nextTurn(): void {
    let currentTurnIndex = this.turn$.getValue();
    const game = this.game$.getValue();

    game.board.hideSelected();
    game.board.resetSelected();

    this.game$.next(game);

    this.turn$.next(currentTurnIndex + 1);
  }
}
