export default class AddLocationController {
    
    constructor(locationsSrv, stateRouter) {
        this.navigate = stateRouter.navigate;
        this.locationsSrv = locationsSrv;
    }

    addNewLocation(location) {
        this.locationsSrv.add(location);
        this.navigate('locations');
    };

    cancel() {
        this.navigate('locations');
    };
}