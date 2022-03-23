<template>
  <component :is="tag" class="splide" ref="root">
    <SplideTrack v-if="hasTrack">
      <slot></slot>
    </SplideTrack>

    <slot v-else></slot>
  </component>
</template>

<script lang="ts">
import { ComponentConstructor, Options, Splide } from '@splidejs/splide';
import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, provide, Ref, ref, watch } from 'vue';
import { EVENTS } from '../../constants/events';
import { SPLIDE_INJECTION_KEY } from '../../constants/keys';
import { merge } from '../../utils';
import SplideTrack from '../SplideTrack/SplideTrack.vue';


/**
 * The component for the Splide root element.
 *
 * @since 0.4.0
 */
export default defineComponent( {
  name: 'Splide',
  emits: EVENTS.map( event => `splide:${ event }` ),
  components: { SplideTrack },

  props: {
    /**
     * Changes the tag name.
     */
    tag: {
      default: 'div',
      type   : String,
    },

    /**
     * Options for Splide instance.
     */
    options: {
      default: {},
      type   : Object as PropType<Options>,
    },

    /**
     * Registers extension components.
     */
    extensions: Object as PropType<Record<string, ComponentConstructor>>,

    /**
     * Registers a transition component.
     */
    transition: Function as PropType<ComponentConstructor>,

    /**
     * Determines whether to render a track element or not.
     */
    hasTrack: {
      default: true,
      type   : Boolean,
    },
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

    watch( () => merge( {}, props.options ), options => {
      if ( splide.value ) {
        splide.value.options = options;
      }
    }, { deep: true } );

    provide<Ref<Splide | undefined>>( SPLIDE_INJECTION_KEY, splide );

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
      splide.value?.sync( target );
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
