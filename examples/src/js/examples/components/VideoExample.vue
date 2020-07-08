<template>
  <div class="wrapper">
    <h2>Video Example</h2>

    <div class="description">
      <p>
        This example uses <a href="https://splidejs.com/extension-video/" target="_blank" rel="noopener">Video
        Extension</a>.
      </p>
      <p>
        <a
          href="https://github.com/Splidejs/vue-splide/blob/master/examples/src/js/examples/components/VideoExample.vue"
          target="_blank"
          rel="noopener"
        >
          View Code
        </a>
      </p>
    </div>

    <splide
      :options="options"
      :extensions="extensions"
    >
      <splide-slide data-splide-youtube="https://www.youtube.com/watch?v=3GNQL3alB-Y">
        <img src="http://i3.ytimg.com/vi/3GNQL3alB-Y/maxresdefault.jpg">
      </splide-slide>
      <splide-slide data-splide-youtube="https://www.youtube.com/watch?v=xLJ2QQDrN9k">
        <img src="http://i3.ytimg.com/vi/xLJ2QQDrN9k/maxresdefault.jpg">
      </splide-slide>
      <splide-slide data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU">
        <img src="http://i3.ytimg.com/vi/cdz__ojQOuU/maxresdefault.jpg">
      </splide-slide>
      <splide-slide data-splide-youtube="https://www.youtube.com/watch?v=oS6N_ZBFDZE">
        <img src="http://i3.ytimg.com/vi/oS6N_ZBFDZE/maxresdefault.jpg">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
	import { Splide, SplideSlide } from '../../../../../src/js';
  import { createSlides } from "../../utils/slides";

  // Import the Video extension.
	import Video from '@splidejs/splide-extension-video';

	// Import CSS if needed.
	import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

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

        // Register the extension.
			  extensions: {
	        Video,
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