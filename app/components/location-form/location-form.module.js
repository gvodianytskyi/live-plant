import addLocation from './add-location';
import editLocation from './edit-location';

export let locationForm = angular.module('locationForm', [])
    .component('editLocation', editLocation)
    .component('addLocation', addLocation);
