<template>
  <splide
    :options="options"
    @splide:moved="moved"
  >
    <splide-slide v-for="slide in slides" :key="slide.src">
      <img :src="slide.src" alt="slide.alt">
    </splide-slide>
  </splide>
</template>

<script>
  import Splide from '../../components/Splide';
  import SplideSlide from '../../components/SplideSlide';
  import { createSlides } from "../../utils/slides";

  export default {
  	components: {
  		Splide,
      SplideSlide,
    },

	  data() {
		  return {
			  options: {
			  	rewind : true,
				  width  : 800,
				  gap    : '1rem',
			  },
			  slides: createSlides(),
		  };
	  },

	  methods: {
		  moved( splide, newIndex ) {
			  console.log( 'moved', newIndex );
		  },
	  },
  }
</script>