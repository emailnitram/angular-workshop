app.directive('child', function() {
    return {
        restrict: 'A',
        scope: {
            parent: '@', // binds the value of parent scope property to the local scope
            children: '=', // binds parent scope property directly which will be evaluated before being passed in
            shout: '&' // binds an expression or method which will be executed in the context of the scope it belongs
        },
        template: '<div class="btn btn-link" ng-click="shout()"> \
        I am a directive and my father is {{parent || "NIL"}} \
        as well as {{children || "NIL"}}</div>'
    };
});