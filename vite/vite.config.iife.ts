import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import babel from '@rollup/plugin-babel';


export default defineConfig( {
  build: {
		lib: {
			name    : 'VueSplide',
			entry   : './src/js/build/iife.ts',
      formats : [ 'iife' ],
			fileName: format => `js/vue-splide.min.js`,
		},
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      plugins: [
        babel( {
          configFile  : './.babelrc',
          include: [ './src/**'],
        } ),
      ],
    },
    // Preserves the global variable name.
    minify: 'terser',
    emptyOutDir: false,
	},
  plugins: [
    vue(),
  ],
} );
