'use strict';

/**
 * @ngdoc overview
 * @name lavenderMApp
 * @description
 * # lavenderMApp
 *
 * Main module of the application.
 */
angular
  .module('lavenderMApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
