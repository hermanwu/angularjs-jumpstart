(function() {
    var coursesFactory = function($http) {

        var factory = {};
        factory.getCourses = function() {
            return $http.get('/courses');
        };

        factory.getCourse = function(courseId) {
            return $http.get('/courses/' + courseId);
        };

        return factory;
    };

    coursesFactory.$inject = ['$http'];

    angular.module('coursesApp').factory('coursesFactory', coursesFactory);
}());