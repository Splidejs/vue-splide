<template>
  <main id="examples">
    <basic-example></basic-example>
    <hr>
    <autoplay-example></autoplay-example>
    <hr>
    <thumbnail-example></thumbnail-example>
    <hr>
    <dynamic-slide-example></dynamic-slide-example>
  </main>
</template>

<script>
	import BasicExample from './components/BasicExample';
	import AutoplayExample from './components/AutoplayExample';
	import ThumbnailExample from './components/ThumbnailsExample';
	import DynamicSlideExample from './components/DynamicSlidesExample'

  export default {
  	components: {
		  BasicExample,
      AutoplayExample,
		  ThumbnailExample,
		  DynamicSlideExample,
    },
  }
</script>