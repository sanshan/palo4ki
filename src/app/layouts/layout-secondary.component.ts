import { Component } from '@angular/core';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    `:host {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      margin: 0 auto;
      max-width: 500px;
      width: 100%;
    }`,
  ]
})
export class LayoutSecondaryComponent {
}
