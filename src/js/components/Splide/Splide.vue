<template>
  <div class="splide" ref="root">
    <slot v-if="hasSliderWrapper" name="before-slider"></slot>

    <div v-if="hasSliderWrapper" class="splide__slider">
      <slot name="before-track"></slot>

      <SplideTrack>
        <slot></slot>
      </SplideTrack>

      <slot name="after-track"></slot>
    </div>

    <template v-else>
      <slot name="before-track"></slot>

      <SplideTrack>
        <slot></slot>
      </SplideTrack>

      <slot name="after-track"></slot>
    </template>

    <slot v-if="hasSliderWrapper" name="after-slider"></slot>
  </div>
</template>

<script lang="ts">
import { ComponentConstructor, Options, Splide } from '@splidejs/splide';
import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, ref, onUpdated } from 'vue';
import { EVENTS } from '../../constants/events';
import SplideTrack from '../SplideTrack/SplideTrack.vue';


/**
 * The component for the Splide root element.
 *
 * @since 0.4.0
 */
export default defineComponent( {
  name: 'Splide',
  components: { SplideTrack },
  emits: EVENTS.map( event => `splide:${ event }` ),

  props: {
    /**
     * Options for Splide instance.
     */
    options: Object as PropType<Options>,

    /**
     * Registers extension components.
     */
    extensions: Object as PropType<Record<string, ComponentConstructor>>,

    /**
     * Registers a transition component.
     */
    transition: Function as PropType<ComponentConstructor>,

    /**
     * Determines whether to use a slider element or not.
     */
    hasSliderWrapper: Boolean,
  },

  setup( props, context ) {
    const splide = ref<Splide>();
    const root   = ref<HTMLElement>();

    onMounted( () => {
      if ( root.value ) {
        splide.value = new Splide( root.value, props.options );
        bind( splide.value );
        splide.value.mount( props.extensions, props.transition );
      }
    } );

    onBeforeUnmount( () => {
      splide.value?.destroy();
    } );

    onUpdated( () => {
      splide.value?.refresh();
    } );

    /**
     * Returns the current index.
     */
    const index = computed( () => splide.value?.index || 0 );

    /**
     * Returns the latest number of slides.
     */
    const length = computed( () => splide.value?.length || 0 );

    /**
     * Goes to the slide specified by the control.
     *
     * @see `Splide#go()`
     *
     * @param control - A control pattern.
     */
    function go( control: number | string ): void {
      splide.value?.go( control );
    }

    /**
     * Registers another splide instance to sync.
     *
     * @param target - A target to sync.
     */
    function sync( target: Splide ): void {
      const { value: main } = splide;

      if ( main ) {
        main.sync( target );
        remount( main );
        remount( target );
      }
    }

    /**
     * Listens to splide events and propagates them as Vue events.
     *
     * @private
     *
     * @param splide - A splide instance.
     */
    function bind( splide: Splide ): void {
      EVENTS.forEach( event => {
        splide.on( event, ( ...args: any[] ) => {
          context.emit( `splide:${ event }`, splide, ...args );
        } );
      } );
    }

    /**
     * Remounts the provided splide instance.
     *
     * @private
     *
     * @param splide - A splide instance to remount.
     */
    function remount( splide: Splide ): void {
      splide.destroy( false );
      splide.mount();
    }

    return {
      splide,
      root,
      index,
      length,
      go,
      sync,
    }
  },
} );
</script>
