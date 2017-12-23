import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularAnimate from 'angular-animate';
import angularMessages from 'angular-messages';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularSanitize from 'angular-sanitize';
import uiSelect from 'ui-select';
import angularGrid from 'angulargrid';
import angularMaterial from 'angular-material';
import angularJWT from 'angular-jwt';

import commonModule from './common/common.module';

let childApp = angular.module('childApp', [
	// vendors
	uiRouter,
	uiSelect,
	angularSanitize,
	angularAnimate,
	angularMessages,
	angularUIBootstrap,
	angularGrid,
	angularMaterial,
	angularJWT,
	// proprietary
	commonModule,
]).name;

export {
	angular,
	uiRouter,
	uiSelect,
	angularSanitize,
	angularAnimate,
	angularMessages,
	angularUIBootstrap,
	angularGrid,
	angularMaterial,
	angularJWT,
	commonModule,
	childApp
}


