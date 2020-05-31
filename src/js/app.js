/**
 * Run the example.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import Vue from 'vue';
import Examples from './examples/Examples';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

document.addEventListener( 'DOMContentLoaded', () => {
	new Vue( {
		el    : '#app',
		render: h => h( Examples ),
	} );
} );