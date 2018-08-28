//@flow

function isObject(target) {
  return Object.prototype.toString.call(target) === '[object Object]';
}

function flaser(object, split = '.') {
  let objectLine = {};

  function find(target, keys = []) {
    for (let key in target) {
      if (!isObject(target[key])) {
        objectLine[`${keys.concat(key).join(split)}`] = target[key];
        continue;
      }
      find(target[key], keys.concat(key));
    }
  }
  find(object);

  return objectLine;
}

export default flaser;
