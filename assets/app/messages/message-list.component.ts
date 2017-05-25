import { Component } from '@angular/core';

import { Message } from "./message.model";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
          <app-message
            [inputMessage]="message"
            (editClicked)="message.content = $event"
            *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class MessageListComponent {
  messages: Message[] = [
    new Message(
    'A Project to demonstrate analysis.',
    'Max Schwarz',
    'Data Science Python Notebook'
    ),
    new Message(
    'A Project to offer insurance services.',
    'Mike Dougherty',
    'Why whole life works!, says Ruby'
    ),
    new Message(
    'This Project use saas-management to organize a team.',
    'Mike Dougherty',
    'Ruby on Rails website for company workgroups.'
    )
  ];

}
