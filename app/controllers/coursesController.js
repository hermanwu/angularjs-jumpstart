(function() {

    var CoursesController = function ($scope, $log, coursesFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.courses = [];
        $scope.appSettings = appSettings;

        function init() {
            coursesFactory.getCourses()
                .success(function(courses){
                    $scope.courses = courses;
                })
                .error(function(data, status, headers, config){
                    $log.log(data.error + ' ' + status);
                });
        }

        init();


        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };
    //  this line is to handle script minifier
    CoursesController.$inject = ['$scope', '$log', 'coursesFactory', 'appSettings'];
    // create module for controller
    angular.module('coursesApp').controller('CoursesController', CoursesController);
}());