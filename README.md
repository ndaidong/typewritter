# typewritter
Text typing effect - like [typed.js](https://github.com/mattboldt/typed.js/), but lightweight, modular and no dependency.

[Demo](http://codepen.io/ndaidong/pen/aZpYmb)

## Setup

- CDN

   - [typewritter-effect.min.js](https://rawgit.com/ndaidong/typewritter/master/dist/typewritter-effect.min.js)

  ```
  <script type="text/javascript" src="https://rawgit.com/ndaidong/typewritter/master/dist/typewritter-effect.min.js"></script>
  ```

- Also supports ES6 Module, AMD and UMD style.


## APIs

* .start(Object config)


In which, config might have the following properties:

- containerId:  ID of the container. Required.
- extractClass:  Optional. If this property is specified, the engine will try to extract the sentences from all element which have that class name (within container).
- cursorClass:  Optional. If you want to add more style to cursor (at the end of sentence), just specify this property and use CSS to decorate it.
- sentences:  Optional. An array of the sentences.

## Usage

#### HTML

```
<div id="typePad">
  <p>TypeWritter effect demo.</p>
  <p class="sentence">One day in spring, a woman came</p>
  <p class="sentence">In my lonely woods,</p>
  <p class="sentence">In the lovely form of the Beloved.</p>
  <p class="sentence">Came, to give to my songs, melodies,</p>
  <p class="sentence">To give to my dreams, sweetness.</p>
  <p class="sentence">Suddenly a wild wave</p>
  <p class="sentence">Broke over my heart's shores</p>
  <p class="sentence">And drowned all language.</p>
  <p class="sentence">To my lips no name came,</p>
  <p class="sentence">She stood beneath the tree, turned,</p>
  <p class="sentence">Glanced at my face, made sad with pain,</p>
  <p class="sentence">And with quick steps, came and sat by me.</p>
  <p class="sentence">"One Day In Spring....", Rabindranath Tagore</p>
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

http://codepen.io/ndaidong/pen/aZpYmb

# License

The MIT License (MIT)
