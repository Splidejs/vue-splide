<template>
  <div>
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
  import Splide from '../../components/Splide';
  import SplideSlide from '../../components/SplideSlide';
  import { createSlides } from '../../utils/slides';

  export default {
  	components: {
  		Splide,
      SplideSlide,
    },

    data() {
      return {
	      primaryOptions: {
	      	type    : 'loop',
		      width   : 800,
		      perPage : 2,
          perMove : 1,
		      gap     : '1rem',
	      },
	      secondaryOptions: {
		      type        : 'slide',
		      rewind      : true,
		      width       : 800,
		      gap         : '1rem',
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