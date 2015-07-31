(function() {
    // ngRoute is the module for route
    var app = angular.module('coursesApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        //path
        $routeProvider
        .when('/',{
            controller: 'CoursesController',
            templateUrl: 'app/views/coursesController.html'
        })
        .otherwise({ redirectTo: '/' });
    });

}());
