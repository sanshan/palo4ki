import { Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { AbstractBoard } from '@sdk/abstracts';
import { Stick } from '@web-app/modules/game';
import { GameManagerService } from '@web-app/services';

const MAXIMUM_STICKS = 12;

const MAXIMUM_STICKS_SELECTABLE = 3;

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class Board extends AbstractBoard {
  @Output('change-turn') changeTurn = new EventEmitter();

  maximumSticks = MAXIMUM_STICKS;

  maximumSticksSelectable = MAXIMUM_STICKS_SELECTABLE;

  @ViewChildren(Stick) private _sticks: QueryList<Stick> | undefined;

  get sticks(): Stick[] {
    return this._sticks?.toArray() || [];
  }

  get canSelectStick(): boolean {
    const visibleSticks = this.visible?.length || 0;
    const selectedSticks = this.selected?.length || 0;

    return visibleSticks > 0 && selectedSticks < this.maximumSticksSelectable && selectedSticks <= visibleSticks;
  }

  get canNextTurn(): boolean {
    const visibleSticks = this.visible?.length || 0;
    const selectedSticks = this.selected?.length || 0;

    return visibleSticks > 0 && selectedSticks <= this.maximumSticksSelectable && selectedSticks <= visibleSticks;
  }

  constructor(readonly manager: GameManagerService) {super();}
}
