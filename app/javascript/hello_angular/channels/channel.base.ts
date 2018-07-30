export class ChannelBase {
    cable: any;

    constructor(action_cable_service) {
        this.cable = action_cable_service.cable("ws://localhost:5000/cable");
    }
}