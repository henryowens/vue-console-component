import { percent, px } from "csx";
import { style } from "typestyle";

export const consoleItemStyle: string = style({
  margin: 0,
  lineHeight: px(26),
  letterSpacing: px(1),
  display: "grid",
  justifyItems: "start",
  gridAutoFlow: "row",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "auto",
  whiteSpace: "break-spaces",
  fontSize: px(14),
  padding: `0 ${px(2)}`,
  $nest: {
    input: {
      fontSize: "inherit",
      width: percent(100),
      border: 0,
      padding: 0,
      background: "transparent",
      color: "#d0cfcf",
      fontFamily: "Source Code Pro,monospace",
      resize: "none",
      $nest: {
        "&:focus": {
          outline: "none",
        },
      },
    },
  },
});
