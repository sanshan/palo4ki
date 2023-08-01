import { Component } from '@angular/core';

@Component({
  selector: 'game-layout-main',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    `:host {
      display: flex;
      height: 100%;
      justify-content: center;
      margin: 0 auto;
      max-width: 1000px;
      width: 100%;
    }`,
  ]
})
export class LayoutMainComponent {
}
