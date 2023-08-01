import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationModule } from '../../modules';

@Component({
  selector: 'app-screen-registration',
  standalone: true,
  imports: [CommonModule, RegistrationModule],
  templateUrl: './screen-registration.component.html',
  styleUrls: ['./screen-registration.component.scss']
})
export class ScreenRegistrationComponent {

}
