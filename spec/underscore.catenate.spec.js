var chai = require("chai");
var _ = require("underscore");
_.mixin(require('../src/underscore.catenate'));

describe("underscore.catenate", function() {
  it("should catenate methods", function() {
    var value = "";

    var fooBar = _.catenate(function() {
      return value += "foo";
    }, function() {
      return value += "Bar";
    });

    chai.expect(fooBar()).to.equal("fooBar");
  });
});