# get-value-safely ![JS](https://img.shields.io/badge/ES-6-green.svg) ![npm](https://img.shields.io/badge/npm-5.6.x-blue.svg) 
JavaScript mini-library to get nested values safely.

Assures that a value of a child chain property is returned without runtime errors.

If the checked property does not exist in the provided object or one of the children in the chain
is undefined, then it returns the provided fallback value.

The fallback can be also returned if the checked property is falsy (i.e. undefined, null, false, 0, '', etc.)
and the fallbackOnFalsy flag is set to `true`.

Arrays could be checked as well by passing the index in the path; ex: getValue(arr, '0.obj.a')

### Install

```
$ npm i get-value-safely
```

### Import

```
const get = require('get-value-safely');
```

### Use

```
// Test object.
const obj = {
  c: {
    a: 2,
    b: {
      c: [1, 2, 3, {a: 15, b: 10}, 15]
    },
    c: undefined,
    d: null
  },
  d: ''
};

get(null, 'c.a', 'fallback');

get(obj, 'c.d', 'fallback');

get(obj, 'c.c', 'fallback', true);

get(obj, 'c.b.c.2');

get(obj, 'c.b.c.3.a');

```

For more examples please check the `test.js` file.
