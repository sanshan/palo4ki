import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModule } from '@web-app/modules/game/game.module';

@Component({
  selector: 'app-screen-game',
  standalone: true,
  imports: [CommonModule, GameModule],
  templateUrl: './screen-game.component.html',
  styleUrls: ['./screen-game.component.scss']
})
export class ScreenGameComponent {

}
