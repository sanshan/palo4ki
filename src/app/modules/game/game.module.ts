import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteratesPipe } from '@web-app/pipes';
import { Board, Game, Stick } from '@web-app/modules/game/components';

@NgModule({
  declarations: [Game, Board, Stick],
  exports: [Game],
  imports: [
    CommonModule,
    IteratesPipe
  ]
})
export class GameModule {
}
