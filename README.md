# Vue Splide
**Vue component for the [Splide](https://github.com/Splidejs/splide) slider library.**

## Installation
Get the latest version by NPM:
```bash
$ npm install @splidejs/vue-splide
```

## Registration
### Global Registration
Import vue-splide and install into Vue:
```javascript
import Vue from 'vue';
import App from './App';
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );

new Vue( {
  el    : '#app',
  render: h => h( App ),
} );
```

### Local Registration
Import Splide and SplideSlide components:
```javascript
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  components: {
    Splide,
    SplideSlide,
  },
}
```

### CSS
Import [styles](https://splidejs.com/themes/) if you need.
```javascript
import `@splidejs/splide/dist/css/themes/splide-default.min.css`;
// or
import `@splidejs/splide/dist/css/themes/splide-sea-green.min.css`;
// or
import `@splidejs/splide/dist/css/themes/splide-skyblue.min.css`;
```

## Examples
Here is a basic example:
```javascript
<template>
  <splide
    :options="options"
    @splide:moved="moved"
  >
    <splide-slide v-for="slide in slides" :key="slide.src">
      <img :src="slide.src">
    </splide-slide>
  </splide>
</template>

<script>
  const IMAGE_URL = 'https://source.unsplash.com/random/800x450';

  export default { 
    data() {
      return {
        options: {
          rewind : true,
          width  : 800,
          gap    : '1rem',
        },
        slides: [],
      };
    },

    created() {
      this.slides = Array.from( { length: 10 } ).map( ( value, index ) => {
        return {
          src: `${ IMAGE_URL }?sig=${ index }`,
          alt: `Image ${ index }`,
        };
      } );
    },

    methods: {
      moved( splide, newIndex ) {
        console.log( 'moved', newIndex );
      },
    },
  }
</script>
```
More examples:
* [Basic example](https://github.com/Splidejs/vue-splide/blob/master/src/js/examples/components/BasicExample.vue)
* [Update slides by v-for reactivity](https://github.com/Splidejs/vue-splide/blob/master/src/js/examples/components/DynamicSlidesExample.vue)
* [Thumbnails](https://github.com/Splidejs/vue-splide/blob/master/src/js/examples/components/ThumbnailsExample.vue)

## License
Vue Splide and Splide are released under the MIT license.  
© 2020 Naotoshi Fujita