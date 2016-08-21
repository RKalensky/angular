(function(){
    phones.factory("PhonesFactory", PhonesFactory);
    
    PhonesFactory.$inject = ["$http"];
    function PhonesFactory($http) {
        var phonesList,
            phonesDescriptionList,
            ready = false;
        
        $http.get("src/phones.json")
            .then(function (response) {
                phonesList = angular.fromJson(response.data);
                return $http.get("src/phonesDescriptions.json")
                    .then(function (response) {
                    phonesDescriptionList = angular.fromJson(response.data);
                    ready = true;
                })
            })
        
        function getPhoneDescriptionData(phoneId) {
            for(var i = 0; i < phonesDescriptionList.length; i++) {
                if(phonesDescriptionList[i].id == phoneId) {
                    return phonesDescriptionList[i];
                }
            }
            return null;
        }
        
        function getList() {
            return phonesList;
        }
        
        function getStatus() {
            return ready;
        }
        
        return {
            getStatus: getStatus,
            getList: getList,
            getPhoneDescriptionData: getPhoneDescriptionData
        }
    }
})()

