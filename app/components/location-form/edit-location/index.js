import EditLocationController from './edit-location.controller';

export default {
    controller: EditLocationController,
    controllerAs: "$ctrl",
    templateUrl: "components/location-form/location-form.html",
    bindings: {
        location: '<'
    }
}