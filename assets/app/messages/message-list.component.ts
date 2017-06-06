import { Component, OnInit } from '@angular/core';

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
        <h2>Project List</h2>
        <h5><i>You must be logged in and own the project to edit or delete.</i></h5><br>
          <app-message
            [inputMessage]="message"
            *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class MessageListComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      this.messageService.getMessages()
          .subscribe(
              (messages: Message[]) => {
                  this.messages = messages;
              }
          );
  }
}
