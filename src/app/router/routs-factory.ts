import { Route } from '@angular/router';
import { LayoutMainComponent, LayoutSecondaryComponent } from '../layouts';
import { ScreenWelcomeComponent } from '../screens';

export class RoutsFactory {
  static loadWelcomeRoute(): Route {
    return {
      path: '',
      title: "Sticks game - welcome",
      component: LayoutSecondaryComponent,
      children: [
        {
          path: '',
          component: ScreenWelcomeComponent
        }
      ]
    };
  }

  static lazyLoadRegistrationRoute(): Route {
    return {
      path: 'registration',
      title: "Sticks game - registration",
      component: LayoutSecondaryComponent,
      children: [
        {
          path: '',
          loadComponent: () => import('../screens/screen-registration/screen-registration.component')
            .then(module => module.ScreenRegistrationComponent)
        }
      ]
    };
  }

  static lazyLoadGameRoute(): Route {
    return {
      path: 'game',
      title: "Sticks game",
      component: LayoutMainComponent,
      children: [
        {
          path: '',
          loadComponent: () => import('../screens/screen-game/screen-game.component')
            .then(module => module.ScreenGameComponent)
        }
      ]
    };
  }

  static notFoundRout(): Route {
    return {
      path: '**',
      redirectTo: ''
    };
  }
}