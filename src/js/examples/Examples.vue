<template>
  <div>
    <basic-example></basic-example>
    <autoplay-example></autoplay-example>
    <thumbnail-example></thumbnail-example>
    <dynamic-slide-example></dynamic-slide-example>
  </div>
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