<template>
  <div class="wrapper">
    <h2>Basic Example</h2>

    <splide
      :options="options"
      @splide:moved="moved"
    >
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
	import { Splide, SplideSlide } from '../../../../../src/js';
  import { createSlides } from "../../utils/slides";

  export default {
  	components: {
  		Splide,
      SplideSlide,
    },

	  data() {
		  return {
			  options: {
				  rewind: true,
				  gap   : '1rem',
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