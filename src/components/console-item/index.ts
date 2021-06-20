import { App as Application } from "vue";
import ConsoleItem from "./ConsoleItem.vue";

import { registerComponent } from "../../utils/component";

const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, ConsoleItem);
  },
};

export default Plugin;

export { ConsoleItem };
