# typewritter
Lightweight library for text typing effect. No dependency.

## Setup

- CDN

   - [typewritter-effect.min.js](https://cdn.rawgit.com/ndaidong/typewritter/master/dist/typewritter-effect.min.js)

  ```
  <script type="text/javascript" src="https://cdn.rawgit.com/ndaidong/typewritter/master/dist/typewritter-effect.min.js"></script>
  ```

- This library also supports ES6 Module, AMD and UMD style.


## APIs

* .start(Object config)
* .stop()

## Usage

#### HTML

```
<div id="typePad">
  <p>Looking for new chance?</p>
  <p class="sentence">Are you experienced developer?</p>
  <p class="sentence">Are you talented designer?</p>
  <p class="sentence">Or you are good in solution consulting?</p>
  <p class="sentence">Are you looking for new challenge?</p>
  <p class="sentence">Here may be your chance...</p>
</div>
```

#### CSS

```
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.cursor{
  opacity: 1;
  animation: blink 0.7s infinite;
}

#typePad .sentence {
  display: none;
}
```

#### JavaScript

```
<script type="text/javascript" src="typewritter-effect.min.js"></script>
<script type="text/javascript">
TypeWritter.start({
  containerId: 'typePad',
  extractClass: 'sentence',
  cursorClass: 'cursor'
});
</script>
```

So we would get something like this demo:

http://codepen.io/ndaidong/full/aZpYmb/

# License

The MIT License (MIT)
