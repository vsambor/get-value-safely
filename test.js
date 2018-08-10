const get = require('./main').getValueSafely;

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

/**
 * My basic test mechanism which checks the condition and display if the test passed or not (in a fashion way).
 *
 * ex success:
 * ✅ <--- Test that non existing property r
 * ex failed:
 * ❌ <--- Test that a undefined falsy
 *
 * @param testTitle - the test title to
 * @param expression - valid js expression
 */
function assert(testTitle, expression) {
    console.log(`${expression ? '\u2705' : '\u274C'} <--- ${testTitle}`);
}

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
