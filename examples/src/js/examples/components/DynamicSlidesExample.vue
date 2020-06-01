<template>
  <div class="wrapper">
    <h2>Dynamic Slides</h2>

    <div class="description">
      <a
        href="https://github.com/Splidejs/vue-splide/blob/master/examples/src/js/examples/components/DynamicSlidesExample.vue"
        target="_blank"
        rel="noopener"
      >
        View Code
      </a>
    </div>

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
					rewind : true,
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