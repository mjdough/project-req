import { Message } from "./message.model";

export class MessageService {
    private messages: Message[] = [
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

    addMessage(message: Message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}
