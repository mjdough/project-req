import { Component, Input } from '@angular/core';

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: [`
      .author {
        display: inline-block;
        font-style: italic;
        font-size: 14px;
        width: 80%;
      }
      .config {
        display: inline-block;
        font-size: 14px;
        width: 19%;
      }
      .panel-header {
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        width: 80%;
      }
    `]
})
export class MessageComponent {
    @Input('inputMessage') message: Message;

    constructor(private messageService: MessageService) {}

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    onDetails() {
        this.messageService.detailMessage(this.message);
    }


    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }
}
