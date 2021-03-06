(function(root, factory) {

  if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(_);
    exports = factory(_);
  } else {
    root._.mixin(factory(root._));
  }

}(this, function(_) {

  return {
    catenate: function() {
      var methods = arguments;

      return function() {
        var output;
        var context = this;
        var catenateArguments = arguments;

        _.each(methods, function(method) {
          if (method) {
            output = method.apply(context, catenateArguments);
          }
        });

        return output;
      }
    }
  };

}));
