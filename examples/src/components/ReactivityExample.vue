<template>
  <div class="wrapper">
    <h2 id="reactivity-example-heading">Reactivity Example</h2>

    <div style="margin-bottom: 1rem">
      <label>
        <span>gap:</span>
        <input type="number" min="0" max="20" v-model="options.gap"/>
        px
      </label>

      <label>
        <span>perPage:</span>
        <input type="number" min="1" max="5" v-model="options.perPage"/>
      </label>

      <label>
        <span>height:</span>
        <input
          type="number"
          min="5"
          max="20"
          :value="typeof options.height === 'string' ? parseInt( options.height ) : 5"
          @input="onHeightChange"
        />
        rem
      </label>
    </div>

    <Splide :options="options" aria-labelledby="reactivity-example-heading">
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script lang="ts">
import { Options, Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, reactive, ref } from 'vue';
import { generateSlides } from '../utils';


export default defineComponent( {
  name: 'ReactiveExample',

  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    // Do not change readonly options later, such as `type`, `preloadPages`, etc.
    const options = reactive<Options>( {
      perPage: 2,
      gap    : 0,
      height : '10rem',
      rewind : true,
    } );

    function onHeightChange( e: Event ): void {
      options.height = `${ ( e.target as HTMLInputElement ).value || 5 }rem`;
    }

    return {
      slides: generateSlides(),
      options,
      onHeightChange,
    }
  },
} );
</script>

<style scoped>
label span {
  margin-right: .5rem;
}

input {
  height: 1.5rem;
  width: 4rem;
  font-family: inherit;
}

label {
  margin-right: 1rem;
}
</style>

