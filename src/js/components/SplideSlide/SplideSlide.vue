<template>
  <li class="splide__slide">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


/**
 * The component for each slide.
 *
 * @since 0.4.0
 */
export default defineComponent( {
  name: 'SplideSlide',
} );
</script>
