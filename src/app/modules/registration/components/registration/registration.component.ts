import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '@sdk/classes';
import { GameManagerService } from '@web-app/services';
import { map } from 'rxjs';
import { Router } from '@angular/router';

export const PLAYERS_CAN_BE_REGISTERED = 2;


interface RegistrationForm {
  name: FormControl<string>;
}

function createRegistrationForm(fb: FormBuilder): FormGroup<RegistrationForm> {
  return fb.group<RegistrationForm>({
    name: fb.nonNullable.control('', [Validators.required])
  });
}

@Component({
  selector: 'game-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form = createRegistrationForm(this.fb);

  index$ = this.manager.players$.pipe(map((players) => players.length + 1));

  constructor(
    private readonly fb: FormBuilder,
    private readonly manager: GameManagerService,
    private readonly router: Router
  ) {}

  register(formValue: Partial<Player>, count: number): void {
    if (!this.form.valid) {
      return;
    }

    this.manager.addPlayer(formValue.name!);
    this.form.reset();


    if (count === PLAYERS_CAN_BE_REGISTERED) {
      this.router.navigate(['./game']);
    }
  }
}
