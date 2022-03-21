const fs = require( 'fs-extra' );

async function copy() {
  await fs.copy( './node_modules/@splidejs/splide/dist/css', './dist/css', { overwrite: true } );
}

copy().catch( console.error )