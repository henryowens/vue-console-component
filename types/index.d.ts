import { DefineComponent, Plugin } from "vue";

declare const vueConsoleComponent: Exclude<Plugin["install"], undefined>;

export default vueConsoleComponent;

export const Console: DefineComponent<{}, {}, any>;

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
