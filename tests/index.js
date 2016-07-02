const tape = require('tape');
const to2d = require('..');

const test = tape.test;

test('should work with objects', t => {
  const actual = to2d([
    {foo:
       1},
    {foo:
       2},
    {foo:
       3},
    {foo:
       1},
    {foo:
       2},
    {foo:
       3},
    {foo:
       1},
    {foo:
       2},
    {foo:
       3}
  ], 3);
  const expected = [
    {
      foo: 1,
      position: {
        x: 0,
        y: 0
      }
    },
    {
      foo: 2,
      position: {
        x: 1,
        y: 0
      }
    },
    {
      foo: 3,
      position: {
        x: 2,
        y: 0
      }
    },
    {
      foo: 1,
      position: {
        x: 0,
        y: 1
      }
    },
    {
      foo: 2,
      position: {
        x: 1,
        y: 1
      }
    },
    {
      foo: 3,
      position: {
        x: 2,
        y: 1
      }
    },
    {
      foo: 1,
      position: {
        x: 0,
        y: 2
      }
    },
    {
      foo: 2,
      position: {
        x: 1,
        y: 2
      }
    },
    {
      foo: 3,
      position: {
        x: 2,
        y: 2
      }
    }
  ];

  t.deepEqual(actual, expected);
  t.end();
});

test('should work with primitives', t => {
  const actual = to2d([1, 2, 3], 3);
  const expected = {
    x: 0,
    y: 0
  };

  t.deepEqual(actual[0].position, expected);
  t.end();
});
