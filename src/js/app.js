'use strict';

var newspickerApp = angular.module('newspickerApp', [
  'ngRoute',
  'newspickerControllers',
  'newspickerServices'
]);

newspickerApp.config(function ($routeProvider) {
    $routeProvider
      .when('/news', {
        templateUrl: 'partials/news-list.html',
        controller: 'datepickerCtrl'
      })
      .when('/news/:newsId*', {
        templateUrl: 'partials/news-details.html',
        controller: 'newsDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/news'
      });
  })
;
