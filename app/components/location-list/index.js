import LocationListController from './location-list.controller';

export default {
    controller: LocationListController,
    controllerAs: "$ctrl",
    templateUrl: "components/location-list/location-list.html",
    bindings: {
        locations: "<"
    }
}