import { DefineComponent, Plugin } from "vue";

declare const vueConsoleComponent: Exclude<Plugin["install"], undefined>;

export default vueConsoleComponent;

export const Console: DefineComponent<{}, {}, any>;
