<template>
  <p :class="consoleItemStyle">
    <span class="pre-text" v-if="preText">{{ preText }}: </span>
    <span v-if="!canEdit" class="body-text">
      <slot />
    </span>
    <input v-else v-model="inputVal" type="text" @keyup.enter="enter" />
  </p>
</template>

<script lang="ts">
import { Options, prop, Vue, WithDefault } from "vue-class-component";
import { consoleItemStyle } from "./style.css";

class Props {
  preText?: string = prop<string>({
    required: false,
  });
  canEdit: WithDefault<boolean> = prop<boolean>({
    required: false,
    default: false,
  });
}

@Options({})
export default class ConsoleItem extends Vue.with(Props) {
  public inputVal = "";
  public consoleItemStyle: string = consoleItemStyle;

  public enter(): void {
    this.$emit("enter", this.inputVal);
    this.inputVal = "";
  }
}
</script>
