import { percent, px } from "csx";
import { style } from "typestyle";

export const topBarStyle: string = style({
  background: "linear-gradient(0deg,#1c1c1e,#2c2c2e)",
  height: px(20),
  borderBottom: `${px(1)} solid #1c1c1e`,
  borderRadius: `${px(5)} ${px(5)} 0 0`,
  boxShadow: `0 ${px(10)} ${px(60)} rgb(0 0 0 / ${percent(20)})`,
  padding: `0 ${px(10)}`,
});

export const buttonsStyle: string = style({
  display: "flex",
  height: percent(100),
  justifyContent: "flex-start",
  alignItems: "center",
  alignContent: "center",
  $nest: {
    div: {
      width: px(10),
      height: px(10),
      borderRadius: percent(100),
    },
    ".close": { backgroundColor: "#fb4948" },
    ".mini": { backgroundColor: "#864502", margin: `0 ${px(8)}` },
    ".max": { backgroundColor: "#2ac833" },
  },
});

export const bodyStyle: string = style({
  height: px(459),
  background: "#000",
  fontFamily: "Source Code Pro,monospace!important",
  color: "#d0cfcf!important",
  padding: px(10),
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  overflowY: "hidden",
});
export function consoleStyle(width: string, height: string): string {
  return style({ width, height });
}
