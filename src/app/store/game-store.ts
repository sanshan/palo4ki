import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '@web-app/modules/game';

@Injectable({
  providedIn: 'root'
})
export class GameStore extends BehaviorSubject<Game> {
  constructor() {super(new Game());}
}
