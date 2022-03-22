<template>
  <div class="wrapper">
    <h2 id="video-example-heading">Video</h2>

    <Splide
      aria-labelledby="video-example-heading"
      :options="options"
      :extensions="extensions"
    >
      <SplideSlide v-for="( id, index ) in videos" :key="id" :data-splide-youtube="id">
        <img
          :src="`https://i3.ytimg.com/vi/${ id }/maxresdefault.jpg`"
          :alt="`YouTube Sample ${ index + 1 }`"
        >
      </SplideSlide>
    </Splide>
  </div>
</template>

<script lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { Video } from '@splidejs/splide-extension-video';
import { defineComponent } from 'vue';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';


export default defineComponent( {
  name: 'VideoExample',

  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const videos = [ '3GNQL3alB-Y', 'xLJ2QQDrN9k', 'cdz__ojQOuU', 'oS6N_ZBFDZE' ];

    const options = {
      rewind     : true,
      heightRatio: 0.5625,
    };

    return {
      videos,
      options,
      extensions: { Video },
    }
  },
} );
</script>
