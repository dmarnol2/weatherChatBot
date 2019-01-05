import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatDialogComponent } from './chatbot/chat-dialog/chat-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    ChatDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
