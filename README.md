# wc-star-input

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/wc-star-input)
[![Coverage Badge](https://img.shields.io/endpoint?style=flat-square&url=https://gist.githubusercontent.com/yishiashia/dee60aefdce58a7559baeb7c5deb3a8b/raw/7c17b27a85415002bdb2344fc73961917402d3a9/wc-star-input__heads_master.json)](https://gist.githubusercontent.com/yishiashia/dee60aefdce58a7559baeb7c5deb3a8b/raw/7c17b27a85415002bdb2344fc73961917402d3a9/wc-star-input__heads_master.json)
[![Javascript](https://img.shields.io/badge/ES-6%2B-ff69b4.svg?style=flat-square)](https://www.ecma-international.org/ecma-262/6.0/)
[![TypeScript](https://img.shields.io/badge/TypeScript-^4.7.4-blue?style=flat-square)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg?maxAge=2592000&style=flat-square)](https://opensource.org/licenses/MIT)

Star rating input web component.


## Install

    $ npm install wc-star-input

## Syntax

```html
<script src="star-input.js"></script>

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
```

## Demo page
The demo page: https://yishiashia.github.io/star-input.html
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
