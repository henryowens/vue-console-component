import { DefineComponent, Plugin } from "vue";

declare const vueConsoleComponent: Exclude<Plugin["install"], undefined>;

export default vueConsoleComponent;

// export const Console: Exclude<Plugin["install"], undefined> | DefineComponent;

declare module "vue-console-component" {
  import type { DefineComponent } from "vue";
  const Console: DefineComponent<{}, {}, any>;
  export { Console };
}
