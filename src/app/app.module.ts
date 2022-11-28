import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommentComponent} from './comments/comments.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextInputComponent } from './textinput/textinput.component';

import { MentionsModule } from './mentions/mentions.module';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    TextInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MentionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
