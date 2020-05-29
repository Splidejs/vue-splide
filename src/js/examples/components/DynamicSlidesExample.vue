<template>
  <div>
    <splide :options="options" :slides="slides">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src">
      </splide-slide>
    </splide>

    <button @click="add">Add Image</button>
  </div>
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
					perPage: 3,
					gap    : '1rem',
				},
				slides: [],
				count : 0,
			};
		},

		created() {
			this.slides = Array.from( { length: 2 } ).map( ( value, index ) => {
				return {
					src: `${ IMAGE_URL }?sig=${ index }`,
					alt: `Image ${ index }`,
				};
			} );
		},

		methods: {
			add() {
				const index = this.count + 100;

				this.slides.push( {
					src: `${ IMAGE_URL }?sig=${ index }`,
					alt: `Image ${ index }`,
				} );

				++this.count;
			},
		},
	}
</script>