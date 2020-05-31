<template>
  <div class="wrapper">
    <splide :options="options" :slides="slides">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt">
      </splide-slide>
    </splide>

    <div class="controls">
      <button @click="add">Add Image</button>
    </div>
  </div>
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
					perPage: 3,
					gap    : '1rem',
				},
				slides: createSlides( 2 ),
				count : 0,
			};
		},

		methods: {
			add() {
				this.slides = this.slides.concat( createSlides( 1, ++this.count + 100 ) );
			},
		},
	}
</script>

<style scoped lang="scss">
  $color: #20b2aa;

  .wrapper {
    max-width: calc( 800px + 6em );
  }

  .controls {
    text-align: center;

    button {
      border: none;
      background: $color;
      color: white;
      cursor: pointer;
      padding: .3em 1em;
      border-radius: 2em;
      outline: none;
      transition: background-color .2s linear;

      &:hover {
        background: darken( $color, 20% );
      }
    }
  }
</style>