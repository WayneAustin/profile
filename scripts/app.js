/**
 * Created by Wayne on 04/11/2015.
 */
/// <reference path="../libs/angular.js" />

(function () {

  var app = angular.module("app", ['firebase', 'ngTouch', 'ngSanitize', 'controllers', 'directives', 'services']);

  angular.module("controllers", []);
  angular.module("directives", []);
  angular.module("services", []);

  angular.module("controllers")
    .controller("MasterController", function ($scope, fireBaseService) {

      var View = {
        busy: false,
        title: "",
        content: "",
        getContent: function () {
          var posts = fireBaseService.getPosts();
        }
      };

    });

  angular.module("services")
    .service("fireBaseService", function ($firebaseObject) {
      var fbRef = new Firebase("https://blistering-fire-7593.firebaseio.com/posts/");
      return {
        getPosts: function() {
          return $firebaseObject(fbRef);
        }
      }
    });

}());