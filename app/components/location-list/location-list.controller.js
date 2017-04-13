export default class LocationListController {

    constructor(stateRouter, locationsSrv, navigationSrv) {
        this.navigate = stateRouter.navigate;
        this.locationsSrv = locationsSrv;
        this.navigationSrv = navigationSrv;
    }

    remove(id) {
        this.locationsSrv.remove(id);
        this.locations = this.locationsSrv.getData();
    }

    edit(id) {
        this.navigate('editLocation', {locationId: id});
        this.navigationSrv.setEditMode(true);
    }
}