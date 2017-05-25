export class Message {
    constructor(public content: string,
                public username: string,
                public title: string,
                public messageId?: string,
                public userId?: string) {}
}
