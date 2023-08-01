import { Routes } from '@angular/router';
import { RoutsFactory } from './routs-factory';

export const routes: Routes = [
  RoutsFactory.loadWelcomeRoute(),
  RoutsFactory.lazyLoadRegistrationRoute(),
  RoutsFactory.lazyLoadGameRoute(),
  RoutsFactory.notFoundRout()
];