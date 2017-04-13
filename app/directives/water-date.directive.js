export default class WaterDateDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attributes, ngModelCtrl) {
        ngModelCtrl.$validators.waterDate = function(modelValue) {
            return modelValue < new Date();
        };
    }
}