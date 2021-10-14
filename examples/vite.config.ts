import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';


export default defineConfig( {
  base: './',
	plugins: [ vue() ],
  resolve: {
    alias: [
      { find: 'vue', replacement: path.resolve( './node_modules/vue' ) },
    ],
  }
} );
