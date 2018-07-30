import {Injectable} from '@angular/core';
import {ChannelBase} from "./channel.base";
import { ActionCableService } from 'angular2-actioncable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ChannelMessages extends ChannelBase {
    subscription: Subscription;
    channel: any;

    constructor(private action_cable_service: ActionCableService) {
        super(action_cable_service);
        this.channel = this.cable.channel('MessagesChannel');
    }

    subscribe(onMessageReceived) {
        this.subscription = this.channel.received().subscribe(onMessageReceived);
    }

    broadcast(message){
        this.channel.send({name: message});
    }

    resetName(){
        this.channel.perform('reset_name')
    }
}