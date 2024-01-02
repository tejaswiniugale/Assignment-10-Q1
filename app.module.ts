import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompSuccessDirectiveDirective } from './comp-success-directive.directive';
import { CompFailureDirectiveDirective } from './comp-failure-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSuccessDirectiveDirective,
    CompFailureDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
