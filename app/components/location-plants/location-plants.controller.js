export default class LocationPlantsController {
    constructor($stateParams, stateRouter, navigationSrv, plantsSrv) {
        this.navigate = stateRouter.navigate;
        this.$stateParams = $stateParams;
        this.navigationSrv = navigationSrv;
        this.plantsSrv = plantsSrv;
    }

    addNewPlant() {
        this.navigationSrv.setFromLocation(this.$stateParams['locationId']);
        this.navigate('addPlant');
    }

    remove(id) {
        this.plantsSrv.remove(id);
        this.plants = this.plantsSrv.getPlantsByLocationId(this.$stateParams['locationId'])
    };

    edit(id) {
        this.navigate('editPlant', {plantId: id});
        this.navigationSrv.setEditMode(true);
        this.navigationSrv.setFromLocation(this.$stateParams['locationId']);
    };

    water(id) {
        this.plantsSrv.water(id);
        this.plants = this.plantsSrv.getPlantsByLocationId(this.$stateParams['locationId']);
    };
}