/**
 * Run the example.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import Vue from 'vue';
import Examples from './examples/Examples';

new Vue( {
	el    : '#app',
	render: h => h( Examples ),
} );