<template>
  <div :class="consoleStyle">
    <div :class="topBarStyle">
      <div :class="buttonsStyle">
        <div class="close" />
        <div class="mini" />
        <div class="max" />
      </div>
    </div>
    <div :class="bodyStyle">
      <div :class="scrollStyle">
        <span>
          <console-item
            v-for="(msg, i) in messages"
            :key="i"
            :pre-text="preText"
            >{{ msg }}</console-item
          >
          <console-item @enter="enter" :pre-text="preText" :can-edit="true" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue, WithDefault } from "vue-class-component";
import { ConsoleItem } from "../console-item";
import {
  consoleStyle,
  topBarStyle,
  buttonsStyle,
  bodyStyle,
  scrollStyle,
} from "./style.css";

class Props {
  preText?: string = prop<string>({
    required: false,
  });
  width: WithDefault<string> = prop<string>({
    required: false,
    default: "700px",
  });
  height: WithDefault<string> = prop<string>({
    required: false,
    default: "400px",
  });
}

@Options({
  components: {
    "console-item": ConsoleItem,
  },
})
export default class Console extends Vue.with(Props) {
  public topBarStyle: string = topBarStyle;
  public buttonsStyle: string = buttonsStyle;
  public bodyStyle: string = bodyStyle;
  public scrollStyle: string = scrollStyle;

  public messages: string[] = [];

  get consoleStyle(): string {
    return consoleStyle(this.width, this.height);
  }

  public enter(message: string): void {
    this.messages.push(message);
    this.$emit("input-console", message);
  }
}
</script>
