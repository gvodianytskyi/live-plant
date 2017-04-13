import LocationPlantsController from './location-plants.controller';

export default {
    controller: LocationPlantsController,
    controllerAs: "$ctrl",
    templateUrl: "components/location-plants/location-plants.html",
    bindings: {
        plants: '<',
        location: '<'
    }
}