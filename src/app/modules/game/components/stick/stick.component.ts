import { Component, HostBinding } from '@angular/core';
import { AbstractStick } from '@sdk/abstracts';

@Component({
  selector: 'game-stick',
  template: '',
  styleUrls: ['./stick.component.scss']
})
export class Stick extends AbstractStick {
  @HostBinding('class.hidden') hidden = false;

  @HostBinding('class.selected') selected = false;
}
