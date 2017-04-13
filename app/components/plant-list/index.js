import PlantListController from './plant-list.controller';

export default {
    controller: PlantListController,
    controllerAs: "$ctrl",
    templateUrl: "components/plant-list/plant-list.html",
    bindings: {
        plants: '<'
    }
}