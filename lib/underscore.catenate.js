(function(_) {

  _.catenate = function() {
    var methods = arguments;
    return function() {
      var result;
      var context = this;
      var args = arguments;
      _.each(methods, function(method) {
        if (method)
          result = method.apply(context, args);
      });
      return result;
    };
  };

})(_);