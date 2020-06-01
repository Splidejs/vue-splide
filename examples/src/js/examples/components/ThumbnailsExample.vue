<template>
  <div class="wrapper">
    <h2>Thumbnail Slider</h2>

    <div class="description">
      <a
        href="https://github.com/Splidejs/vue-splide/blob/master/examples/src/js/examples/components/ThumbnailExample.vue"
        target="_blank"
        rel="noopener"
      >
        View Code
      </a>
    </div>

    <splide
      :options="primaryOptions"
      ref="primary"
    >
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt">
      </splide-slide>
    </splide>

    <splide
      :options="secondaryOptions"
      ref="secondary"
    >
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
	import { Splide, SplideSlide } from '../../../../../src/js';
  import { createSlides } from '../../utils/slides';

  export default {
  	components: {
  		Splide,
      SplideSlide,
    },

    data() {
      return {
	      primaryOptions: {
		      type      : 'loop',
		      perPage   : 2,
		      perMove   : 1,
		      gap       : '1rem',
		      pagination: false,
	      },
	      secondaryOptions: {
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
	      },
	      slides: createSlides(),
	      count : 0,
      }
    },

    mounted() {
  		// Set the sync target.
      this.$refs.primary.sync( this.$refs.secondary.splide );
    },
  }
</script>