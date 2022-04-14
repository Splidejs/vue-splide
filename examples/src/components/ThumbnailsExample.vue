<template>
  <div class="wrapper">
    <h2 id="thumbnail-example-heading">Thumbnails</h2>

    <Splide
      aria-labelledby="thumbnail-example-heading"
      :options="mainOptions"
      ref="main"
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt">
      </SplideSlide>
    </Splide>

    <Splide
      aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      :options="thumbsOptions"
      ref="thumbs"
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script lang="ts">
import { Splide, SplideSlide, Options } from '@splidejs/vue-splide';
import { defineComponent, onMounted, ref } from 'vue';
import { generateSlides } from '../utils';


export default defineComponent( {
  name: 'ThumbnailsExample',

  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const main   = ref<InstanceType<typeof Splide>>();
    const thumbs = ref<InstanceType<typeof Splide>>();
    const slides = generateSlides();

    const mainOptions: Options = {
      type      : 'loop',
      perPage   : 2,
      perMove   : 1,
      gap       : '1rem',
      pagination: false,
    };

    const thumbsOptions: Options = {
      type        : 'slide',
      rewind      : true,
      gap         : '1rem',
      pagination  : false,
      fixedWidth  : 110,
      fixedHeight : 70,
      cover       : true,
      focus       : 'center',
      isNavigation: true,
      updateOnMove: true,
    };

    onMounted( () => {
      const thumbsSplide = thumbs.value?.splide;

      if ( thumbsSplide ) {
        main.value?.sync( thumbsSplide );
      }
    } );

    return {
      slides,
      main,
      thumbs,
      mainOptions,
      thumbsOptions,
    }
  },
} );
</script>
