import * as angular from 'angular';

export default class PlantsService {
    
    constructor(utilsSrv) {
        this.utilsSrv = utilsSrv;
    }

    getData() {
        return angular.fromJson(localStorage.getItem('live-plant_plants')) || [];
    }

    setData(data) {
        localStorage.setItem('live-plant_plants', angular.toJson(data));
    }

    add(plant) {
        let plants = this.getData();
        plants.push({
            id: this.utilsSrv.generateNextId(plants.map(item => item.id)),
            name: plant.name,
            locationId: plant.location.id,
            minFrequency: plant.minFrequency,
            maxFrequency: plant.maxFrequency,
            watered: plant.watered
        });
        this.setData(plants);
    }

    remove(id) {
        let plants = this.getData();
        this.utilsSrv.removeItemById(plants, id);
        this.setData(plants);
    }

    getPlant(id) {
        let plants = this.getData();
        return plants.find(plant => String(plant.id) === String(id));
    }

    getPlantsByLocationId(id) {
        let plants = this.getData();
        return plants.filter(plant => String(plant.locationId) === String(id));
    }

    save(plant) {
        let plants = this.getData();
        let index = plants.findIndex(x => String(x.id) === String(plant.id));
        plants[index].name = plant.name;
        plants[index].locationId = plant.locationId;
        plants[index].minFrequency = plant.minFrequency;
        plants[index].maxFrequency = plant.maxFrequency;
        plants[index].watered = plant.watered;
        this.setData(plants);
    }

    water(id) {
        let plants = this.getData();
        let index = plants.findIndex(x => String(x.id) === String(id));
        plants[index].watered = new Date();
        this.setData(plants);
    }

    static createInstance(utilsSrv) {
        if (!PlantsService.instance) {
            PlantsService.instance = new PlantsService(utilsSrv);
        }
        return PlantsService.instance;
    }
}

PlantsService.$inject = ['utilsSrv'];