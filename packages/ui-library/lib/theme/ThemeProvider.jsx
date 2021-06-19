import { createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { themes } from "./theme";

export const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={themes.default}>{children}</StyledThemeProvider>
  );
};
