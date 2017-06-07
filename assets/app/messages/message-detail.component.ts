import { Component, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";


@Component({
    selector: 'app-message-detail',
    templateUrl: './message-detail.component.html'
    // template: `
    //   <article class="panel panel-default">
    //     <div class="panel-header">
    //           {{ message.title }}
    //     </div>
    //         <hr>
    //       <div class="panel-body">
    //           {{ message.content }}
    //       </div>
    //     <footer class="panel-footer">
    //         <div class="author">
    //           {{ message.username }}
    //         </div>
    //     </footer>
    //   </article>
    // `
})
export class MessageDetailComponent {
    @Input('message') message: Message;

    constructor(private messageService: MessageService) {}

}
