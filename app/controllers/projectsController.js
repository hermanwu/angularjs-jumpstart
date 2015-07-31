(function() {

    var ProjectsController = function ($scope, $log, $routeParams, coursesFactory) {

        var courseId = $routeParams.courseId;
        $scope.course = null;


        function init() {
            coursesFactory.getCourse(courseId)
                .success(function(course){
                    $scope.course = course;
                })
                .error(function(data, status, headers, config){
                    $log.log(data.error + ' ' + status);
                });
        }

        init();
    };
    //  this line is to handle script minifier
    ProjectsController.$inject = ['$scope', '$log', '$routeParams', 'coursesFactory'];
    // create module for controller
    angular.module('coursesApp').controller('ProjectsController', ProjectsController);
}());