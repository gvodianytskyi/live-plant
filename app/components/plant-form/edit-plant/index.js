import EditPlantController from './edit-plant.controller';

export default {
    controller: EditPlantController,
    controllerAs: "$ctrl",
    templateUrl: "components/plant-form/plant-form.html",
    bindings: {
        plant: "<",
        locations: '<'
    }
}