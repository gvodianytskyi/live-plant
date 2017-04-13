export class AppController {
    constructor() {
        this.header = "LIVE PLANT";
        this.active = false;
    }

    changeMenuState() {
        this.active = !this.active;
    }

    hideMenu() {
        if (this.active) {
            this.active = false;
        }
    }
}