import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {ChannelMessages} from "../channels/channel.messages";
import { ActionCableService } from 'angular2-actioncable';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [ActionCableService, ChannelMessages],
    bootstrap: [AppComponent]
})
export class AppModule {
}
