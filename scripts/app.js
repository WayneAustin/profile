/**
 * Created by Wayne on 04/11/2015.
 */
/// <reference path="/libs/angular.js" />

(function () {

  var app = angular.module("app", ['firebase', 'controllers', 'directives', 'services']);

  angular.module("controllers", []);
  angular.module("directives", []);
  angular.module("services", []);

  angular.module("controllers")
    .controller("MasterController", function ($scope, $firebaseObject, $firebaseArray) {
      var fbRef = new Firebase("https://blistering-fire-7593.firebaseio.com");

      $scope.data = $firebaseObject(fbRef);


    })

}());