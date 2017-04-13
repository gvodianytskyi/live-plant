import * as angular from 'angular';

export default class LocationsService {

    constructor(utilsSrv) {
        this.utilsSrv = utilsSrv;
    }

    getData() {
       return angular.fromJson(localStorage.getItem('live-plant_locations')) || [];
    }

    setData(data) {
        localStorage.setItem('live-plant_locations', angular.toJson(data));
    }

    add(location) {
        var locations = this.getData();
        locations.push({
            id: this.utilsSrv.generateNextId(locations.map(item => item.id)),
            name: location
        });
        this.setData(locations);
    }

    getName(id) {
        var locations = this.getData();
        return locations.find(location => String(location.id) === String(id)).name;
    }

    getLocation(id) {
        var locations = this.getData();
        return locations.find(location => String(location.id) === String(id));
    }

    remove(id) {
        var locations = this.getData();
        this.utilsSrv.removeItemById(locations, id);
        this.setData(locations);
    }

    save(location) {
        var locations = this.getData();
        var index = locations.findIndex(x => String(x.id) === String(location.id));
        locations[index].name = location.name;
        this.setData(locations);
    }

    static createInstance(utilsSrv) {
        if (!LocationsService.instance) {
            LocationsService.instance = new LocationsService(utilsSrv);
        }
        return LocationsService.instance;
    }
}

LocationsService.$inject = ['utilsSrv'];