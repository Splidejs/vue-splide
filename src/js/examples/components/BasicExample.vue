<template>
  <splide
    :options="options"
    @splide:moved="moved"
  >
    <splide-slide v-for="slide in slides" :key="slide.src">
      <img :src="slide.src">
    </splide-slide>
  </splide>
</template>

<script>
  import Splide from '../../components/Splide';
  import SplideSlide from '../../components/SplideSlide';

  const IMAGE_URL = 'https://source.unsplash.com/random/800x450';

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
				  perPage: 1,
				  gap    : '1rem',
			  },
			  slides: [],
		  };
	  },

    created() {
  		this.slides = Array.from( { length: 10 } ).map( ( value, index ) => {
			  return {
				  src: `${ IMAGE_URL }?sig=${ index }`,
				  alt: `Image ${ index }`,
			  };
		  } );
    },

	  methods: {
		  moved( splide, newIndex ) {
			  console.log( 'moved', newIndex );
		  },
	  },
  }
</script>