app.directive('clickMe', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var fn = attrs.clickMe;
      fn = fn.split('(')[0];

      element.on('click', function(){
      	scope[fn]();
      });
  	}
  };
});