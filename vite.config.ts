import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig( {
  build: {
		lib: {
			name    : 'VueSplide',
			entry   : './src/js/index.ts',
      formats : [ 'es', 'cjs' ],
			fileName: format => {
        let suffix: string = format;

        if ( format === 'es' ) {
          suffix = 'esm';
        }

        return `js/vue-splide.${ suffix }.js`;
      },
		},
    emptyOutDir: false,
    watch: {
			include: 'src/**'
		},
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    minify: false,
	},
  plugins: [ vue() ],
} );
