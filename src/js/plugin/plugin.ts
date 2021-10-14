import { App } from 'vue';
import { Splide, SplideSlide } from '../components';


export const VueSplide = {
  install( app: App ): void {
    app.component( Splide.name, Splide );
    app.component( SplideSlide.name, SplideSlide );
  },
};
