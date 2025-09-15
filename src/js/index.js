/**
 * The Splide Vue plugin.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import Splide from './components/Splide.vue';
import SplideSlide from './components/SplideSlide.vue';

export default {
	install( Vue, options ) {
		Vue.component( Splide.name, Splide );
		Vue.component( SplideSlide.name, SplideSlide );
	}
};

export { Splide, SplideSlide };
