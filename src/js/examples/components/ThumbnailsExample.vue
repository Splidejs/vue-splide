<template>
  <div>
    <splide
      :options="primaryOptions"
      ref="primary"
    >
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src">
      </splide-slide>

      <template v-slot:controls>
        <div class="splide__progress">
          <div class="splide__progress__bar">
          </div>
        </div>
      </template>
    </splide>

    <splide
      :options="secondaryOptions"
      ref="secondary"
    >
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
  import Splide from '../../components/Splide';
  import SplideSlide from '../../components/SplideSlide';

  const IMAGE_URL = 'https://source.unsplash.com/random/800x600';

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
		      trimSpace   : true,
		      isNavigation: true,
          updateOnMove: true,
	      },
	      slides: [],
	      count : 0,
      }
    },

    created() {
  		this.slides = Array.from( { length: 10 } ).map( ( value, index ) => {
			  return {
				  src: `${ IMAGE_URL }?sig=${ index }`,
				  alt: `Image ${ index }`,
			  };
		  } );
    },

    mounted() {
  		// Set the sync target.
      this.$refs.primary.sync( this.$refs.secondary.splide );
    },
  }
</script>