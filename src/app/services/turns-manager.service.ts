import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_TURN_INDEX = 0;

@Injectable({
  providedIn: 'root'
})
export class TurnsManagerService extends BehaviorSubject<number> {
  constructor() {
    super(DEFAULT_TURN_INDEX);
  }

  isHumanTurn(playerIndex: number): boolean {
    return playerIndex % 2 === 0 && this.getValue() % 2 === 0;
  }
}
