import WaterDateDirective from './water-date.directive';

export let directives = angular.module('directives', [])
    .directive('waterDate', () => new WaterDateDirective());