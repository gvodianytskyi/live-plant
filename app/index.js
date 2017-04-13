import './components/components.module';
import './directives/directives.module';
import './services/services.module';
import 'angular-ui-router';
import 'angular-messages';
import configAppRouter from './app.config';
import * as angular from 'angular';

angular.module('app', ['ui.router', 'ngMessages', 'components', 'directives', 'services'])
    .config(configAppRouter);

angular.element(document).ready(() => {
    angular.bootstrap(document, ["app"]);
});