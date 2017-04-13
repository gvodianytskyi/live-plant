export default function configAppRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            resolve: {
                plants: function (plantsSrv) {
                    return plantsSrv.getData();
                }
            },
            template: "<plant-list plants='$resolve.plants'></plant-list>"
        })
        .state("addPlant", {
            url: "/addPlant",
            template: "<add-plant locations='$resolve.locations'></add-plant>"
        })
        .state("locations", {
            url: "/locations",
            resolve: {
                locations: function (locationsSrv) {
                    return locationsSrv.getData();
                }
            },
            template: "<location-list locations='$resolve.locations'></location-list>"
        })
        .state("addLocation", {
            url: "/addLocation",
            template: '<add-location></add-location>'
        })
        .state("editPlant", {
            url: '/editPlant/:plantId',
            resolve: {
                plant: function ($stateParams, plantsSrv, locationsSrv) {
                    let plant = plantsSrv.getPlant($stateParams["plantId"]);
                    plant.watered = new Date(plant.watered);
                    plant.location = locationsSrv.getLocation(plant.locationId);
                    return plant;
                },
                locations: function (locationsSrv) {
                    return locationsSrv.getData();
                }
            },
            template: '<edit-plant locations="$resolve.locations" plant="$resolve.plant"></edit-plant>'
        })
        .state("editLocation", {
            url: '/editLocation/:locationId',
            resolve: {
                location: function($stateParams, locationsSrv) {
                    return locationsSrv.getName($stateParams["locationId"]);
                }
            },
            template: '<edit-location location="$resolve.location"></edit-location>'
        })
        .state('locationPlants', {
            url: '/locationPlants/:locationId',
            resolve: {
                plants: function ($stateParams, plantsSrv) {
                    return plantsSrv.getPlantsByLocationId($stateParams["locationId"]);
                },
                location: function ($stateParams, locationsSrv) {
                    return locationsSrv.getLocation($stateParams["locationId"]);
                }

            },
            template: '<location-plants location="$resolve.location" plants="$resolve.plants"></location-plants>'
        })
}