import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgcModule } from './ngc/ngc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgcModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
