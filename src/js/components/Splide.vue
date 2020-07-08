<template>
  <div class="splide">
    <div class="splide__slider" v-if="hasSliderWrapper">
      <div class="splide__track">
        <ul class="splide__list">
          <slot></slot>
        </ul>
      </div>
    </div>

    <div v-else class="splide__track">
      <ul class="splide__list">
        <slot></slot>
      </ul>
    </div>

    <slot name="controls"></slot>
  </div>
</template>

<script>
  import Splide from '@splidejs/splide';
  import { EVENTS } from "../constants/events";

  export default {
		name: 'Splide',

		props: {
			options: {
				type   : Object,
				default: () => ( {} ),
			},
      hasSliderWrapper: Boolean,
      extensions: {
	      type   : Object,
	      default: () => ( {} ),
      },
      transition: {
	      type   : Function,
	      default: null,
      },
			slides: Array,
		},

    data() {
			return {
				splide: null,
      };
    },

    mounted() {
			this.splide = new Splide( this.$el, this.options );
			this.bind();
	    this.splide.mount( this.extensions, this.transition );
    },

    beforeDestroy() {
			this.splide.destroy();
    },

	  watch: {
		  /**
		   * If the slides prop is provided, watch it and remount Splide.
		   */
		  slides() {
			  this.remount();
		  },
	  },

    computed: {
			/**
       * Return the active index.
       */
			index() {
				return this.splide.index;
      },

	    /**
	     * Return the length of slides.
	     */
	    length() {
		    return this.splide.length;
	    },
    },

	  methods: {
		  /**
		   * Go to the slide specified by the given control.
		   *
		   * @param {string|number} control - A control pattern.
		   * @param {boolean}       wait    - Optional. Whether to wait for transition.
		   */
      go( control, wait = true ) {
      	this.splide.go( control, wait );
      },

		  /**
		   * Set sync target.
		   *
		   * @param {Splide} splide - A Splide instance.
		   */
      sync( splide ) {
      	this.splide.sync( splide );
      	this.remount();
      },

      /**
       * Listen to all Splide events and emit them with arguments.
       */
		  bind() {
			  EVENTS.forEach( event => {
				  this.splide.on( event, ( ...args ) => {
					  this.$emit( `splide:${ event }`, this.splide, ...args );
				  } );
			  } );
		  },

		  /**
       * Remount the Splide.
		   */
		  remount() {
      	this.$nextTick( () => {
		      this.splide.destroy();
		      this.splide.mount();
		      this.bind();
        } );
      },
	  },
  };
</script>