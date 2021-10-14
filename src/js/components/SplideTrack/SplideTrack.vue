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
 * The component for the track element.
 *
 * @since 0.4.0
 */
export default defineComponent( {
  name: 'SplideTrack',
} );
</script>
