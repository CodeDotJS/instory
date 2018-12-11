<p align="center">
<img src="media/image4144.png" width="400px">
<br>
  <a href="https://travis-ci.org/CodeDotJS/instory">
  <img src="https://travis-ci.org/CodeDotJS/instory.svg?branch=master">
  </a>
  <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
  <br>
  <p align="center"><b>Get downloadable url to the stories of an Instagram user!</b></p>
  <br>
</p>


## Install

```
$ npm install --save instory
```

## Usage

```js
const instory = require('instory');

instory('9gag').then(res => {
  console.log(res);
  /*
  { story:
   [ 'https://scontent-lax3-2.cdninstagram.com/vp/../t50.12441-16/...8147460402176414839_n.mp4',
     'https://scontent-lax3-2.cdninstagram.com/vp/../t50.12441-16/...7961590752994505111_n.jpg' ] }
  */
})
```

## API

```js
instory(username)
```

- __`username`__ `:` __`string`__


## Related

- __[`instories`](https://github.com/CodeDotJS/instories)__ `:` `The best youtube playlist url scrapper and exporter!`
<br>

__NOTE__ : This module is built upon the API used by [Stories IG](https://storiesig.com).

## License

MIT &copy; [Rishi Giri](http://rishi.ml)
