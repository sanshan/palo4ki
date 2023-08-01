import { AfterViewInit, Component, DestroyRef, inject, OnInit, Optional, ViewChild } from '@angular/core';
import { AbstractGame } from '@sdk/abstracts';
import { Board } from '@web-app/modules/game';
import { GameManagerService } from '@web-app/services';
import { assertNever } from '@sdk/utils';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class Game extends AbstractGame implements AfterViewInit, OnInit {
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(Board) board!: Board;

  constructor(@Optional() private readonly manager?: GameManagerService) {super();}

  ngOnInit(): void {
    if (!this.manager) {
      return;
    }

    /**
     * ToDo
     *  We must provide service for computer turns
     */
    this.manager.isHumanTurn$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((isHumanTurn) => {
      if (!isHumanTurn) {
        const visible = this.board.visible || [];
        const count = visible.length <= 4 ? 3 : Math.floor(Math.random() * 3) || 1;

        for (let i = 0; i < count; i++) {
          const index = Math.floor(Math.random() * visible.length);

          visible[index].toggleSelect();
        }

        this.manager?.nextTurn();
      }
    });
  }

  ngAfterViewInit(): void {
    if (!this.board) {
      return assertNever(this, `Board do not provided for Game: `);
    }

    if (!this.manager) {
      return assertNever(this, `Manager do not provided for Game: `);
    }

    this.manager.provideGame(this);
  }

  nextTurn(): void {
    if (!this.manager) {
      return assertNever(this, `Manager do not provided for Game: `);
    }

    this.manager.nextTurn();
  }

}
