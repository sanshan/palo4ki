import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutMainComponent, LayoutSecondaryComponent } from './layouts';
import { ScreenWelcomeComponent } from './screens';
import { AppRoutingModule } from './router';
import { CoreModule } from '@web-app/core';
import { GameManagerService } from '@web-app/services';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    LayoutSecondaryComponent,
    ScreenWelcomeComponent
  ],
  imports: [
    CoreModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [GameManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
