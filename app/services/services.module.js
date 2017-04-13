import * as angular from 'angular';
import LocationsService from './locations.service';
import NavigationService from './navigation.service';
import PlantsService from './plants.service';
import UtilsService from './utils.service';
import StateRouter from './state-router.service';

export let services = angular.module('services', [])
    .factory('navigationSrv', NavigationService.createInstance)
    .factory('utilsSrv', UtilsService.createInstance)
    .factory('locationsSrv', LocationsService.createInstance)
    .factory('plantsSrv', PlantsService.createInstance)
    .service('stateRouter', StateRouter);
