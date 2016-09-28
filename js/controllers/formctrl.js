angular.module('personApp').controller('formctrl',['$scope','fromserv',
    function($scope, fromserv){
        $scope.perList="";
        $scope.$watch(function(){
            return fromserv.perList;
        },
                      function(newVal, oldVal){
            if(oldVal != newVal){
                $scope.perList=newVal;
            }
        }
    )}
    ]);