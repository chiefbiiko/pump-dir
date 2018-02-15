# pump-dir

[![build status](http://img.shields.io/travis/chiefbiiko/pump-dir.svg?style=flat)](http://travis-ci.org/chiefbiiko/pump-dir) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/pump-dir?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/pump-dir)

***

Copy entire directories, safely. All work is done by [`pump`](https://github.com/mafintosh/pump) and [`tar-fs`](https://github.com/mafintosh/tar-fs). Thanks 2 [mafintosh](https://github.com/mafintosh).

***

## Get it!

```
npm install --save pump-dir
```

***

## Usage

``` js
var pumpDir = require('pump-dir')

pumpDir('./node_modules', 'clone_modules', function (err) {
  if (err) return console.error(err)
  console.log('cloned node_modules')
})
```

***

## API

### `pumpDir(from, to[, opts], callback)`

Copy a directory. `opts.ignore` can be a predicate method by which all entries will be filtered. Must return `true` for files that shall be excluded, sig `opts.ignore(name, headers)`, see [`tar-fs`](https://github.com/mafintosh/tar-fs). Calling back like `callback(err)`.

***

## License

[MIT](./license.md)
