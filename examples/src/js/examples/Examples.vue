<template>
  <main id="examples">
    <basic-example></basic-example>
    <hr>
    <autoplay-example></autoplay-example>
    <hr>
    <thumbnail-example></thumbnail-example>
    <hr>
    <dynamic-slide-example></dynamic-slide-example>
    <hr>
    <video-example></video-example>
  </main>
</template>

<script>
	import BasicExample from './components/BasicExample';
	import AutoplayExample from './components/AutoplayExample';
	import ThumbnailExample from './components/ThumbnailsExample';
	import DynamicSlideExample from './components/DynamicSlidesExample'
	import VideoExample from "./components/VideoExample";

  export default {
  	components: {
		  BasicExample,
      AutoplayExample,
		  ThumbnailExample,
		  DynamicSlideExample,
		  VideoExample,
    },
  }
</script>