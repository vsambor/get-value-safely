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

#### Tests Results

Check `test.js` to see the full source.

```
// Same test object.

assert('Test that null object returns fallback', 'fallback' === get(null, 'c.d.d', 'fallback'));

assert('Test that null path returns fallback', 'fallback' === get(obj, null, 'fallback'));

assert('Test that null object and path returns fallback', 'fallback' === get(null, null, 'fallback'));

assert('Test that non existing property returns fallback', 'fallback' === get(obj, 'c.d.d', 'fallback'));

assert('Test that a null falsy property value is well returned', null === get(obj, 'c.d', 'fallback'));

assert('Test that a undefined falsy property value is well returned', undefined === get(obj, 'c.c', 'fallback'));

assert('Test that fallback is returned when falsy flag is activated', 'fallback' === get(obj, 'c.c', 'fallback', true));

assert('Test that an array property returns the well the array', obj.c.b.c === get(obj, 'c.b.c', 'fallback'));

assert('Test that array index value is well returned', 3 === get(obj, 'c.b.c.2', 'fallback'));

assert('Test that fallback is returns when index does not exist', 'fallback' === get(obj, 'c.b.c.10', 'fallback'));

assert('Test that undefined is returned when index and fallback does not exist', undefined === get(obj, 'c.b.c.10'));

assert('Test that nested object inside array can be accesed by array index', 15 === get(obj, 'c.b.c.3.a'));

assert('Test that array length property can be accessed', 5 === get(obj, 'c.b.c.length', 'fallback'));

assert('Test that fallback is not split in reduce, by index', 'fallback' === get(obj, 'c.z.1', 'fallback'));

assert('Test that fallback is not split in reduce, also for falsy', 'fallback' === get(obj, 'c.z.1', 'fallback', true));
```
### The results
<img width="573" alt="screen shot 2018-08-15 at 12 20 22 pm" src="https://user-images.githubusercontent.com/26199384/44143971-0d5be58c-a086-11e8-837b-a9be4532e0d5.png">

