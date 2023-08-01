import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CORE_DEPENDENCIES } from '@web-app/core/core-dependencies';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ...CORE_DEPENDENCIES
  ]
})
export class CoreModule {
}
