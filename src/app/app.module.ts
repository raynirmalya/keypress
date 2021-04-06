import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardShortcutComponent } from './keyboard-shortcut/keyboard-shortcut.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { FormsModule } from '@angular/forms';
import { ConfigureKeypressComponent } from './configure-keypress/configure-keypress.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardShortcutComponent,
    AComponent,
    BComponent,
    CComponent,
    ConfigureKeypressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
