WIP

# Vue Splide
This is a Vue component for the [Splide](https://github.com/Splidejs/splide) slider library.

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
Import styles if you need:
```javascript
import `@splidejs/splide/dist/css/themes/splide-default.min.css`;
// or
import `@splidejs/splide/dist/css/themes/splide-sea-green.min.css`;
// or
import `@splidejs/splide/dist/css/themes/splide-skyblue.min.css`;
```