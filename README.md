underscore.catenate
===================

This library is an extension for Underscore which allows chaining functions into a single method that executes them in sequence.

## Features

* Catenate merged functions

## Dependencies

* underscore.js (>= 1.5)

## Examples

```javascript
var hello = function() {
  console.log('hello');
};

var world = function() {
  console.log('world');
};

var helloWorld = _.catenate(hello, world);
helloWorld(); // hello world
```

## License

Copyright (c) 2013-2014 Mateus Maso. Released under an MIT license.
