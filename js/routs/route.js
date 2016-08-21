(function(){
    phones.config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/describe/:phoneId", {
                templateUrl: "templates/phoneDescribeTemplate.html",
                controller: "PhoneDescription as phone"
            })
    }])
})()