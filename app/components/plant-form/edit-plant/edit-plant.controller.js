export default class EditPlantController {
    constructor(plantsSrv, stateRouter, navigationSrv) {
        this.navigate = stateRouter.navigate;
        this.locationId = navigationSrv.getFromLocationId();
        this.plantsSrv = plantsSrv;
        this.navigationSrv = navigationSrv;
    }

    save(plant) {
        this.plantsSrv.save(plant);
        this.cancel();
    };

    cancel() {
        this.navigationSrv.setEditMode(false);
        if (this.locationId) {
            this.navigate('locationPlants', {locationId: this.locationId});
            this.navigationSrv.setFromLocation(false);
        } else {
            this.navigate('home');
        }
    };

    isEditMode() {
        return this.navigationSrv.isEditMode();
    };
}