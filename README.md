# pokedex [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> JavaScript encyclopedia of Pokemon.

## Installation

```sh
$ npm install --save pokedex
```

## Usage

```js
var Pokedex = require('pokedex'),
    pokedex = new Pokedex();

pokedex.pokemon('bulbasaur', console.log);
```
## License

MIT © [Chris Contolini](http://contolini.com)


[npm-image]: https://badge.fury.io/js/pokedex.svg
[npm-url]: https://npmjs.org/package/pokedex
[travis-image]: https://travis-ci.org/contolini/pokedex.svg?branch=master
[travis-url]: https://travis-ci.org/contolini/pokedex
[daviddm-image]: https://david-dm.org/contolini/pokedex.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/contolini/pokedex
[coveralls-image]: https://coveralls.io/repos/contolini/pokedex/badge.svg
[coveralls-url]: https://coveralls.io/r/contolini/pokedex
