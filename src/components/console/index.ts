import { App as Application } from "vue";
import Console from "./Console.vue";

import { registerComponent } from "../../utils/component";

const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, Console);
  },
};

export default Plugin;

export { Console };
