<template>
  <div class="wrapper">
    <h2 id="basic-example-heading">Basic</h2>

    <Splide
      aria-labelledby="basic-example-heading"
      v-if="enabled"
      :options="options"
      @splide:mounted="onSplideMounted"
      @splide:move="onSplideMove"
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt">
      </SplideSlide>
    </Splide>

    <button @click="enabled = ! enabled">
      {{ enabled ? 'Hide Slider' : 'Show Slider' }}
    </button>
  </div>
</template>

<script lang="ts">
import { Splide as Core } from '@splidejs/splide';
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { defineComponent, ref } from 'vue';
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

    const enabled         = ref<boolean>( true );
    const onSplideMounted = ( splide: Core ) => console.log( splide.length );
    const onSplideMove    = ( splide: Core, index: number ) => console.log( 'move to', index );

    return {
      slides,
      options,
      onSplideMounted,
      onSplideMove,
      enabled,
    }
  },
} );
</script>

