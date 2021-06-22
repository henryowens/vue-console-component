import { DefineComponent, Plugin } from "vue";

declare const vueConsoleComponent: Exclude<Plugin["install"], undefined>;

export default vueConsoleComponent;

export const Console: Exclude<Plugin["install"], undefined> | DefineComponent;
