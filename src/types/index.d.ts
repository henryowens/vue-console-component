import {Console} from '../components'

declare module "vue-console-component" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, Console>;
    export default component;
  }