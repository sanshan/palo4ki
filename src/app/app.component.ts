import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    ':host { display: block; width: 100%; height: 100% }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
