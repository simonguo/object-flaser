# object-flaser

A structured object into a flat object.

[![NPM version](https://img.shields.io/npm/v/object-flaser.svg?style=flat)](https://npmjs.org/package/object-flaser)
[![Build Status](https://img.shields.io/travis/simonguo/object-flaser.svg?style=flat)](https://travis-ci.org/simonguo/object-flaser)

## Installation

```bash
npm install object-flaser
```

## Methods

- **flaser(target: Object, split?: string = '.')**

```js
import { flaser } from 'object-flaser';

const data = {
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

flaser(data);
```

Return:

```js
{
  "user.userGroup.id": 1,
  "user.name.first": "foo",
  "user.name.last": "bar"
}
```

- **parse(target: Object, split?: string = '.')**

```js
import { parse } from 'object-flaser';

const data = {
  'user.userGroup.id': 1,
  'user.name.first': 'foo',
  'user.name.last': 'bar'
};

parse(data);
```

Return:

```js
{
  user: {
    userGroup: {
      id: 1
    },
    name: {
      first: "foo",
      last: "bar"
    }
  }
}
```
