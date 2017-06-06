import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Message } from "./message.model";

@Component({
      selector: 'app-messages',
      template: `
      <div class="row">
          <app-message-list></app-message-list>
      </div>
      <hr>
      <div class="row">
          <app-message-input></app-message-input>
      </div>
    `
})
export class MessagesComponent {

}
