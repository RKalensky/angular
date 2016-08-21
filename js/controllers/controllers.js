(function(){
    phones.controller("PhonesController", PhonesController);
    phones.controller("PhoneDescription", PhoneDescription);
    
    PhonesController.$inject = ["$location", "PhonesFactory"];
    function PhonesController($location, PhonesFactory) {
        var me = this;
        
        me.active = false;
        
        me.onReady = function() {
            return PhonesFactory.getStatus(); 
        }
        
        me.getPhonesList = function() {
            return PhonesFactory.getList();
        }
        
        me.backToHomePage = function() {
            $location.path("/");
        }
        
        me.openItem = function(event) {
            var currentItem = event.currentTarget;
            
            if(me.lastChecked) {
                me.lastChecked.classList.toggle("show-phones-list");
            }
            
            currentItem.classList.toggle("show-phones-list");
            me.lastChecked = currentItem;
        }
    }
    
    PhoneDescription.$inject = ["$routeParams", "PhonesFactory"];
    function PhoneDescription($routeParams, PhonesFactory){
        var me = this;
        me.phoneId = $routeParams.phoneId;
        
        if(me.phoneId) {
            me.phoneDescription = PhonesFactory.getPhoneDescriptionData(me.phoneId);
        }
        
    }
    
})()