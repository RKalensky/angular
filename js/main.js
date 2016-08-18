var phones = angular.module("phones", []);

phones.controller("PhonesController", PhonesController);

PhonesController.$inject = ["$http", "$scope"];
function PhonesController($http, $scope) {
    var me = this;
    $http.get("src/phones.json")
        .success(function (data) {
            me.cardsList = data;
        });
    me.name = "zzz";
    
    setTimeout(function(me){
        debugger;
    }, 2000, $scope)
}