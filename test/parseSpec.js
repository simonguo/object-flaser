var assert = require('assert');
var parse = require('../src/parse').default;

describe('#parse()', function() {
  it('Should return object of structured', function() {
    const obj1 = {
      'user.userGroup.id': 1,
      'user.name.first': 'foo',
      'user.name.last': 'bar'
    };

    const obj2 = parse(obj1);

    assert.equal(obj2.user.userGroup.id, 1);
    assert.equal(obj2.user.name.first, 'foo');
    assert.equal(obj2.user.name.last, 'bar');
  });

  it('Should return object of structured by `-` split', function() {
    const obj1 = {
      'user-userGroup-id': 1,
      'user-name-first': 'foo',
      'user-name-last': 'bar'
    };

    const obj2 = parse(obj1, '-');

    assert.equal(obj2.user.userGroup.id, 1);
    assert.equal(obj2.user.name.first, 'foo');
    assert.equal(obj2.user.name.last, 'bar');
  });
});
