(function(_) {

  _.catenate = function() {
    var methods = arguments;

    return function() {
      var output;
      var context = this;
      var catenateArguments = arguments;

      _.each(methods, function(method) {
        if (method) output = method.apply(context, catenateArguments);
      });
      
      return output;
    };
  };

})(_);
