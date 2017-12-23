// non-angular-related
import 'jquery';
import 'bootstrap-sass';
import 'socket.io-client';

import './styles/common.scss';

// angular-modules
import angular from 'angular';
import TrustedFilter from './filters/trusted.filter';
import UtilService from './services/util.service';
import OnLastRepeatDirective from "./directives/on-last-repeat.directive";
import ErrorTextFilter from './filters/error-text.filter';
import ErrorLegendDirective from './directives/error-legend.directive';
import WelcomeTestComponent from './components/welcome-test/welcome-test.component';

let mod = angular.module('childCommon.common', []);
mod.filter('trusted', TrustedFilter);
mod.filter('errorText', ErrorTextFilter);
mod.service('utilService', UtilService);
mod.directive('onLastRepeat', OnLastRepeatDirective);
mod.directive('errorLegend', ErrorLegendDirective);
mod.component('welcomeTest', WelcomeTestComponent);

export default mod.name;
