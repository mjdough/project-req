import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageComponent } from "./message.component";
import { MessageListComponent } from "./message-list.component";
import { MessageInputComponent } from "./message-input.component";
import { MessagesComponent } from "./messages.component";
import { MessageService } from "./message.service";
import { MessageDetailComponent } from "./message-detail.component";

@NgModule({
    declarations: [
      MessageComponent,
      MessageListComponent,
      MessageInputComponent,
      MessagesComponent,
      MessageDetailComponent
    ],
    imports: [
      FormsModule,
      CommonModule
    ],
    providers: [MessageService]
})
export class MessageModule {

}
