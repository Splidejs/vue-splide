<template>
  <div class="wrapper">
    <h2>Basic</h2>

    <Splide
      :options="options"
      @splide:mounted="onSplideMounted"
      @splide:move="onSplideMove"
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script lang="ts">
import { Core, Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import { generateSlides } from '../utils';


export default defineComponent( {
  name: 'BasicExample',

  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const slides = generateSlides();
    const options = {
      rewind : true,
      perPage: 2,
      gap    : '1rem',
      height : '15rem',
      breakpoints: {
        1000: {
          perPage: 1,
        },
      },
    };

    const onSplideMounted = ( splide: Core ) => console.log( splide.length );
    const onSplideMove    = ( splide: Core, index: number ) => console.log( 'move to', index );

    return {
      slides,
      options,
      onSplideMounted,
      onSplideMove,
    }
  },
} );
</script>

