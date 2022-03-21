<template>
  <div class="splide__track">
    <ul class="splide__list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

/**
 * The component for the Splide track element.
 *
 * @since 0.6.0
 */
export default defineComponent( {
  name: 'SplideTrack',
} );
</script>
