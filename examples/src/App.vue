<template>
  <BasicExample />
  <hr>
  <AutoplayExample />
  <hr>
  <ThumbnailsExample />
  <hr>
  <DynamicSlidesExample />
  <hr>
  <VideoExample />
</template>

<script setup lang="ts">
import AutoplayExample from './components/AutoplayExample.vue';
import BasicExample from './components/BasicExample.vue';
import DynamicSlidesExample from './components/DynamicSlideExample.vue';
import ThumbnailsExample from './components/ThumbnailsExample.vue';
import VideoExample from './components/VideoExample.vue';</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  padding: 5rem 0;
}

h1 {
  text-align: center;
}

hr {
  width: 200px;
  max-width: 50%;
  margin: 4rem auto;
}

button {
  font-family: inherit;
}

.wrapper {
  max-width: 600px;
  margin: 0 auto;
}

.splide__slide {
  background: #eee;
}

.splide__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.splide--nav {
  margin-top: 1rem;
}
</style>
