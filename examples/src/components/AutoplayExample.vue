<template>
  <div class="wrapper">
    <h2>Autoplay</h2>

    <Splide
      :options="options"
      has-slider-wrapper
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt">
      </SplideSlide>

      <template #after-slider>
        <div class="splide__progress">
          <div class="splide__progress__bar">
          </div>
        </div>

        <div class="splide__autoplay">
          <button class="splide__play">Play</button>
          <button class="splide__pause">Pause</button>
        </div>
      </template>
    </Splide>
  </div>
</template>

<script lang="ts">
import { Options } from '@splidejs/splide';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import { generateSlides } from '../utils';

export default defineComponent( {
  name: 'AutoplayExample',

  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const slides = generateSlides();
    const options: Options = {
      rewind      : true,
      gap         : '1rem',
      autoplay    : true,
      pauseOnHover: false,
      arrows      : 'slider',
      height      : '15rem',
    };

    return {
      slides,
      options,
    }
  },
} );
</script>
