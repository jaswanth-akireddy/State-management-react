// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeOptions } from "@mui/material/styles";
import React from "react";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      warning: "string";
    };
  }
  interface ThemeOptions {
    status: {
      warning: React.CSSProperties["color"];
    };
  }
}
