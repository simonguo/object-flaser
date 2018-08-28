var assert = require('assert');
var flaser = require('../src/flaser').default;

describe('#flaser()', function() {
  it('Should return object of flaser', function() {
    const obj1 = {
      user: {
        userGroup: {
          id: 1
        },
        name: {
          first: 'foo',
          last: 'bar'
        }
      }
    };

    const obj2 = flaser(obj1);

    assert.equal(obj2['user.userGroup.id'], 1);
    assert.equal(obj2['user.name.first'], 'foo');
    assert.equal(obj2['user.name.last'], 'bar');
  });

  it('Should return object of flaser by `-` split', function() {
    const obj1 = {
      user: {
        userGroup: {
          id: 1
        },
        name: {
          first: 'foo',
          last: 'bar'
        }
      }
    };

    const obj2 = flaser(obj1, '-');

    assert.equal(obj2['user-userGroup-id'], 1);
    assert.equal(obj2['user-name-first'], 'foo');
    assert.equal(obj2['user-name-last'], 'bar');
  });
});
