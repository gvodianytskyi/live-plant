export default class AddPlantController {
    constructor(plantsSrv, locationsSrv, stateRouter, navigationSrv) {
        this.plantsSrv = plantsSrv;
        this.navigationSrv = navigationSrv;
        this.locationsSrv = locationsSrv;
        this.navigate = stateRouter.navigate;
        this.locations = this.locationsSrv.getData();
        this.plant = {};
        this.locationId = this.navigationSrv.getFromLocationId();
        this.plant.location = this.locationsSrv.getLocation(this.locationId) || this.locations[0];

    }

    addNewPlant(plant) {
        this.plantsSrv.add(plant);
        this.cancel();
    }

    cancel() {
        if (this.locationId) {
            this.navigate('locationPlants', {locationId: this.locationId});
            this.navigationSrv.setFromLocation(false);
        } else {
            this.navigate('home');
        }
    }
}