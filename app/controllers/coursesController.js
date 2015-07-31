


/*
function CoursesController($scope){
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.courses = [{name:'Model Thinking', school:'University of Michigan'},{name:'Data Visualization', school:'University of Illinois at Urbana-Champaign'},{name: 'Interactive Programming in Python', school:'Rice University'},{name: 'Algorithms Design and Analysis', school: 'Stanford University'}];
    $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    }
}
*/
//option2
/*
(function() {
    angular.module('coursesApp').controller('CoursesController', function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.courses = [{name:'Model Thinking', school:'University of Michigan'},{name:'Data Visualization', school:'University of Illinois at Urbana-Champaign'},{name: 'Interactive Programming in Python', school:'Rice University'},{name: 'Algorithms Design and Analysis', school: 'Stanford University'}];
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }
    });
}());
*/

(function() {

    var CoursesController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.courses = [
                {
                    name:'Model Thinking',
                    school:'University of Michigan'
                },
                {
                    name:'Data Visualization',
                    school:'University of Illinois at Urbana-Champaign'
                },
                {
                    name: 'Interactive Programming in Python',
                    school:'Rice University'
                },
                {
                    name: 'Algorithms Design and Analysis',
                    school: 'Stanford University'
                }
            ];
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };
    //  this line is to handle script minifier
    CoursesController.$inject = ['$scope'];
    // create module for controller
    angular.module('coursesApp').controller('CoursesController', CoursesController);
}());