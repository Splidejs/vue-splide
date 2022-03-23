<template>
  <div class="wrapper">
    <h2 id="autoplay-example-heading">Autoplay</h2>

    <Splide
      aria-labelledby="autoplay-example-heading"
      :options="options"
      :has-track="false"
    >
      <div style="position: relative">
        <SplideTrack>
          <SplideSlide v-for="slide in slides" :key="slide.alt">
            <img :src="slide.src" :alt="slide.alt">
          </SplideSlide>
        </SplideTrack>
      </div>

      <div class="splide__progress">
        <div class="splide__progress__bar">
        </div>
      </div>

      <button class="splide__toggle">
        <span class="splide__toggle__play">Play</span>
        <span class="splide__toggle__pause">Pause</span>
      </button>
    </Splide>
  </div>
</template>

<script lang="ts">
import { Splide, SplideSlide, SplideTrack, Options } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import { generateSlides } from '../utils';

export default defineComponent( {
  name: 'AutoplayExample',

  components: {
    Splide,
    SplideTrack,
    SplideSlide,
  },

  setup() {
    const slides = generateSlides();
    const options: Options = {
      rewind  : true,
      gap     : '1rem',
      autoplay: true,
      height  : '15rem',
    };

    return {
      slides,
      options,
    }
  },
} );
</script>
