(function(){
    phones.directive("customRepeat", function(){
        return {
            restrict: "A",
            transclude: "true",
            scope: true,
            link: function(scope, elem, attrs, ctrl, transclude) {
                var collection = attrs.customRepeat;
                
                scope.$watchCollection(collection, function(list) {
                    var childScope;
                    for (var i = 0; i < list.length; i++) {
                        childScope = scope.$new();
                        childScope["list"] = list[i];

                        transclude(childScope, function(clone) {
                            elem.append(clone);
                        });
                    }
                })
            }
        }
    })
})()