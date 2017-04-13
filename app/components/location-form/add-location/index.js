import AddLocationController from './add-location.controller';

export default {
    controller: AddLocationController,
    controllerAs: "$ctrl",
    templateUrl: "components/location-form/location-form.html",
    bindings: {
        location: '<'
    }
}