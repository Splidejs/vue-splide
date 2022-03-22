<template>
  <div class="wrapper">
    <h2 id="dynamic-slides-example-heading">Dynamic Slides</h2>

    <Splide
      class="splide--dynamic"
      aria-labelledby="dynamic-slides-example-heading"
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

      <div class="controls">
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>
      </div>
    </Splide>
  </div>
</template>

<script lang="ts">
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { defineComponent, ref } from 'vue';
import { generateSlides } from '../utils';


export default defineComponent( {
  name: 'DynamicSlidesExample',

  components: {
    Splide,
    SplideTrack,
    SplideSlide,
  },

  setup() {
    const slides = ref<ReturnType<typeof generateSlides>>( generateSlides( 1 ) );

    const options: Options = {
      rewind : true,
      perPage: 3,
      gap    : '1rem',
      height : '15rem',
    };

    function add(): void {
      slides.value.push( ...generateSlides( 1, slides.value.length ) );
    }

    function remove(): void {
      --slides.value.length;
    }

    return {
      slides,
      options,
      add,
      remove,
    }
  },
} );
</script>

<style>
.splide--dynamic .splide__list {
  min-height: 15rem;
}
</style>
