export default class EditLocationController {

    constructor($stateParams, locationsSrv, stateRouter, navigationSrv) {
        this.navigate = stateRouter.navigate;
        this.$stateParams = $stateParams;
        this.locationsSrv = locationsSrv;
        this.navigationSrv = navigationSrv;
    }

    save(location) {
        this.locationsSrv.save({id: this.$stateParams["locationId"], name: location});
        this.navigationSrv.setEditMode(false);
        this.navigate('locations')
    }

    cancel() {
        this.navigate('locations');
        this.navigationSrv.setEditMode(false);
    }

    isEditMode() {
        return this.navigationSrv.isEditMode();
    }
}