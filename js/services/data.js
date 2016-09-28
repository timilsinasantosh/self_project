angular.module('personApp').service('formserv',['$http', function($http){
    this.perList="";
    var obj=this;
    $http.get("/service/person").then(function(response){
        console.log("logging... perList");
    obj.perList=response.data;
        console.log(Obj.perList);
    })
}]);