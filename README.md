# redux-storage-decorator-seamless-immutable

[![build](https://travis-ci.org/morsdyce/redux-storage-decorator-seamless-immutable.svg?branch=master)](https://travis-ci.org/morsdyce/redux-storage-decorator-seamless-immutable)
[![dependencies](https://david-dm.org/morsdyce/redux-storage-decorator-seamless-immutable.svg)](https://david-dm.org/morsdyce/redux-storage-decorator-seamless-immutable)
[![devDependencies](https://david-dm.org/morsdyce/redux-storage-decorator-seamless-immutable/dev-status.svg)](https://david-dm.org/morsdyce/redux-storage-decorator-seamless-immutable#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-decorator-seamless-immutable.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-decorator-seamless-immutable)
[![npm version](https://img.shields.io/npm/v/redux-storage-decorator-seamless-immutable.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-decorator-seamless-immutable)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-decorator-seamless-immutable.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-decorator-seamless-immutable)

[ImmutableJS][] decorator for [redux-storage][]. Use this to convert the loaded
state tree (or parts of it) into a [ImmutableJS][] structure.

## Installation

    npm install --save redux-storage-decorator-seamless-immutable

## Usage

Simply wrap your engine in this decorator and list all keys (or key path) that
should be converted.

```js
import immutable from 'redux-storage-decorator-seamless-immutable'

engine = immutable(engine, [
    ['seamless-immutable-reducer'],
    ['plain-object-reducer', 'with-seamless-immutable-key']
]);
```

# A fork of [redux-storage-decorator-seamless-immutable](https://github.com/michaelcontento/redux-storage-decorator-seamless-immutable)

The original author of the package [redux-storage-decorator-seamless-immutable](https://github.com/michaelcontento/redux-storage-decorator-seamless-immutable) has decided to deprecate the project and no longer maintained. The package will now be maintained here.

Thank you [michaelcontento](https://github.com/michaelcontento) for a great library!

## License

    The MIT License (MIT)

    Copyright (c) 2016- Gunjan Soni <gunjan.soni2002@gmail.com> 
    Copyright (c) 2015-2016 Michael Contento <mail@michaelcontento.de> 

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [redux-storage]: https://github.com/morsdyce/redux-storage
  [redux-storage-decorator-seamless-immutable]: https://github.com/morsdyce/redux-storage-decorator-seamless-immutable
  [seamless-immutable]: https://github.com/rtfeldman/seamless-immutable
