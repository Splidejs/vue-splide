/**
 * The function for sample images.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * URL to a sample image.
 *
 * @type {string}
 */
export const IMAGE_URL = 'https://source.unsplash.com/random/800x450';

/**
 * Return an object containing data of sample images.
 *
 * @param {number} length - Optional. A number of slides.
 * @param {number} sig    - Optional. The signature for getting a different image.
 *
 * @return {Object} - An object containing data of sample images.
 */
export function createSlides( length = 10, sig = 0 ) {
	return Array.apply( null, Array( length ) ).map( ( value, index ) => {
		index = sig || index;

		return {
			src: `${ IMAGE_URL }?sig=${ index }`,
			alt: `Image ${ index }`,
		};
	} );
}