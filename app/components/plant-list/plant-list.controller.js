export default class PlantListController {
    constructor(locationsSrv, plantsSrv, stateRouter, navigationSrv, utilsSrv) {
        this.navigate = stateRouter.navigate;
        this.locationsSrv = locationsSrv;
        this.plantsSrv = plantsSrv;
        this.navigationSrv = navigationSrv;
        this.utilsSrv = utilsSrv;
    }

    getLocation(id) {
        return this.locationsSrv.getName(id);
    }

    remove(id) {
        this.plantsSrv.remove(id);
        this.plants = this.plantsSrv.getData();
    }

    edit(id) {
        this.navigate('editPlant', {plantId: id});
        this.navigationSrv.setEditMode(true);
    }

    water(id) {
        this.plantsSrv.water(id);
        this.plants = this.plantsSrv.getData();
    }

    needToBeWatered(item) {
        var now = new Date();
        return this.utilsSrv.daysBetween(new Date(item.watered), now) > item.minFrequency;
    }
}

PlantListController.$inject = ['locationsSrv', 'plantsSrv', 'stateRouter', 'navigationSrv', 'utilsSrv'];