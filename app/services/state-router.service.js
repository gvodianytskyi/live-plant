export default class StateRouter {
    constructor($state) {
        this.$state = $state;
        this.navigate = this.navigate.bind(this);
    }

    navigate(toState, params) {
        this.$state.go(toState, params);
    }
}

StateRouter.$inject = ['$state'];