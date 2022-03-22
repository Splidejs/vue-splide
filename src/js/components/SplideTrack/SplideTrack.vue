<template>
  <div class="splide__track">
    <ul class="splide__list">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, inject, Ref } from 'vue';
import { SPLIDE_INJECTION_KEY } from '../../constants/keys';
import { Splide } from '@splidejs/splide';

/**
 * The component for the Splide track element.
 *
 * @since 0.6.0
 */
export default defineComponent( {
  name: 'SplideTrack',

  setup() {
    onUpdated( () => {
      const splide = inject<Ref<Splide | undefined>>( SPLIDE_INJECTION_KEY );
      splide?.value?.refresh();
    } );
  }
} );
</script>
