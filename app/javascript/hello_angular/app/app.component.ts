import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import templateString from './app.component.html';
import styleString from './app.component.scss';
import {ChannelMessages} from "../channels/channel.messages";

@Component({
    selector: 'hello-angular',
    template: templateString,
    styles: [styleString]
})
export class AppComponent {
    name = 'Angular!';
    sendername = '';

    constructor(private http: HttpClient, private message_channel: ChannelMessages) {
        message_channel.subscribe(this.onReceive)
    }

    changeName() {
        return this.http.get('/hello_angular/name').subscribe();
    }

    senderName() {
        this.message_channel.broadcast(this.sendername);
    }

    resetName() {
        this.message_channel.resetName();
    }

    onReceive = (data: any) => {
        this.name = data.name ? data.name : 'Angular!';
    }
}
