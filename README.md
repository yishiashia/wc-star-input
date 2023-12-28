# wc-star-input

[![published][wc-image]][wc-url]
[![coverage][coverage-image]][coverage-url]
[![npm](https://img.shields.io/npm/v/wc-star-input.svg?style=flat-square)](https://www.npmjs.com/package/wc-star-input)
[![npm](https://img.shields.io/npm/dm/wc-star-input.svg?style=flat-square)](https://www.npmjs.com/package/wc-star-input)
[![GitHub issues](https://img.shields.io/github/issues/yishiashia/wc-star-input.svg?style=flat-square)](https://github.com/yishiashia/wc-star-input/issues)
![license](https://img.shields.io/npm/l/wc-star-input.svg?style=flat-square)

[![NPM](https://nodei.co/npm/wc-star-input.png?mini=true)](https://www.npmjs.com/package/wc-star-input)

Star rating input web component.


## Installation
You can install `wc-star-input` with npm, or just get started quickly with CDN.

### Install from npm
To install from npm, open terminal in your project folder and run:

```shell
npm install wc-star-input
```

After the package is installed, then you can import the bubble web component into you code:

```js
import 'wc-star-input';

window.onload = function() {
  let starInput = document.createElement('star-input');
  starInput.setAttribute("name", "product_rate");
  starInput.setAttribute("height", "30");
  starInput.setAttribute("width", "30");
  starInput.setAttribute("data-halfstar", "true");
  document.body.appendChild(starInput);
}
```

### Install from CDN
There is `jsDelivr` CDN available for quickly integrated with your web page.

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/npm/wc-star-input"></script>

<!-- Specific version -->
<script src="https://cdn.jsdelivr.net/npm/wc-star-input@1.2.0"></script>
```

#### Basic Usages:

```html
<html>
  <head>

    <!-- Load Bubble WebComponent library -->
    <script src="https://cdn.jsdelivr.net/npm/wc-star-input@1.2.0"></script>
    <!-- End Load -->

  </head>

  <body>

    <!-- Using "star-input" html tag to generate Bubble -->
    <form action="#" method="POST">
    <label for="star-input">Rate here:</label>
    <star-input
        id="star-input"
        name="stars"
        height="30"
        width="30"
        data-halfstar="true"
    >
    </star-input>
    <input type="submit" value="submit" />
</form>

  </body>
</html>
```

## Demo page
The demo page: https://yishiashia.github.io/wc-star-input/
## Usage

If you want to customize this web component, you can import the library and
implement your new class by extend `StarInput`.

```js
import StarInput from "wc-star-input";

class customizedStarInput extends StarInput {
    // override here
}

```

## Customized star style
To customize the star style, you can modify the scss variables in `stars.scss`.

```scss
$empty-star-img: 'https://...';    /* The url path or base64 encode image data string */
$full-star-img: 'data:image/...';  /* The url path or base64 encode image data string */
$star-color:  #FFD700;             /* the display color of star icons */
$hover-color: #FFEA00;             /* the star color when hover on it */
```

### Options

- [`name`](#name-optional)
- [`height`](#height-optional)
- [`width`](#width-optional)
- [`data-halfstar`](#data-halfstar-optional)

#### name (optional)

The name of input, it would be the POST parameter name.

#### height (optional)

The height of star icon (unit: pixel).

#### width (optional)

The width of star icon (unit: pixel).

#### data-halfstar (optional)

Allow rating with half star when setting to `true`.

[wc-image]: https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square
[wc-url]: https://www.webcomponents.org/element/wc-star-input

[coverage-image]: https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyishiashia%2Fdee60aefdce58a7559baeb7c5deb3a8b%2Fraw%2F7c17b27a85415002bdb2344fc73961917402d3a9%2Fwc-star-input__heads_master.json
[coverage-url]: https://gist.githubusercontent.com/yishiashia/dee60aefdce58a7559baeb7c5deb3a8b/raw/7c17b27a85415002bdb2344fc73961917402d3a9/wc-star-input__heads_master.json

[js-image]: https://img.shields.io/badge/ES-6%2B-ff69b4.svg?style=flat-square
[js-url]: https://www.ecma-international.org/ecma-262/6.0/

[ts-image]: https://img.shields.io/badge/TypeScript-^4.7.4-blue?style=flat-square
[ts-url]: https://www.typescriptlang.org/
