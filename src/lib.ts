import * as components from "./components";

import { App as Application, Plugin } from "vue";
import { setVueInstance } from "./utils/config";

const install: Exclude<Plugin["install"], undefined> = (
  instance: Application
) => {
  setVueInstance(instance);
  for (const componentKey in components) {
    instance.use((components as any)[componentKey]);
  }
};

export default install;
