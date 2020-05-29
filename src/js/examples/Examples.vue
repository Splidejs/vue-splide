<template>
  <div>
    <basic-example></basic-example>
    <dynamic-slide-example></dynamic-slide-example>
    <thumbnail-example></thumbnail-example>
  </div>
</template>

<script>
	import BasicExample from './components/BasicExample';
	import ThumbnailExample from './components/ThumbnailsExample';
	import DynamicSlideExample from './components/DynamicSlidesExample'

  export default {
  	components: {
		  BasicExample,
		  DynamicSlideExample,
		  ThumbnailExample,
    },
  }
</script>