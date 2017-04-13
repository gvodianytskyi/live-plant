import * as angular from 'angular';

export default class NavigationService {
    constructor(){}

    isEditMode() {
        return angular.fromJson(localStorage.getItem('live-plant_editMode')) || false;
    }

    getFromLocationId() {
        return angular.fromJson(localStorage.getItem('live-plant_locationId')) || false;
    }

    setEditMode(value) {
        localStorage.setItem('live-plant_editMode', angular.toJson(value));
    }

    setFromLocation(id) {
        localStorage.setItem('live-plant_locationId', angular.toJson(id));
    }

    static createInstance() {
        if (!NavigationService.instance) {
            NavigationService.instance = new NavigationService();    
        }
        return NavigationService.instance;
    }
}
