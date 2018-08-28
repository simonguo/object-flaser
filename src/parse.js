//@flow

function parse(object, split = '.') {
  let objectTree = {};
  for (let key in object) {
    let keys = key.split(split);
    if (keys.length === 1) {
      objectTree[key] = object[key];
      continue;
    }

    objectTree[keys[0]] = objectTree[keys[0]] || {};
    let _temp = objectTree[keys[0]];
    for (let i = 1; i < keys.length; i++) {
      _temp[keys[i]] =
        i === keys.length - 1 ? (_temp[keys[i]] = object[key]) : _temp[keys[i]] || {};
      _temp = _temp[keys[i]];
    }
  }
  return objectTree;
}

export default parse;
