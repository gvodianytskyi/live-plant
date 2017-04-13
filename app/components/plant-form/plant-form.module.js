import addPlant from './add-plant';
import editPlant from './edit-plant';

export let plantForm = angular.module('plantForm', [])
    .component('addPlant', addPlant)
    .component('editPlant', editPlant);
