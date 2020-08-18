import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomItemGeneratorComponent } from './random-item-generator/random-item-generator.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomItemGeneratorComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
