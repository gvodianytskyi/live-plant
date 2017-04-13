import * as angular from "angular";

import './plant-form/plant-form.module';
import './location-form/location-form.module';

import plantList from './plant-list';
import locationPlants from './location-plants';
import locationList from './location-list';
import app from './app';

export let components = angular.module('components', ['plantForm', 'locationForm'])
    .component('plantList', plantList)
    .component('locationPlants', locationPlants)
    .component('locationList', locationList)
    .component('app', app);
