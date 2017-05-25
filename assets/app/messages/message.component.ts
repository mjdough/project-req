import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Message } from "./message.model";

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
        text-align: right;
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
    @Output() editClicked = new EventEmitter<string>();

    color = 'pink';

    onEdit() {
        this.editClicked.emit('A new project');
    }
}
