/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme, Theme } from "@mui/material/styles";

import { components } from "./components";
import { palette } from "./palette";

const initTheme = {
  palette,
  components,
};

type CustomTheme = {
  [Key in keyof typeof initTheme]: typeof initTheme[Key];
};

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export type AppTheme = Theme & CustomTheme;

export const mainTheme = createTheme(initTheme);
