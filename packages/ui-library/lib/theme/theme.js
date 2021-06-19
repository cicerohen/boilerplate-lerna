import { css } from "styled-components";

const DEFAULT_PADDING = 8;
const FONT_BASE = "'10";

export const pixelToRem = (px, base = FONT_BASE) => `${(1 / base) * px}rem`;

export const mediaSizes = {
  sm: "screen and (max-width: 39.9375em)",
  md: "screen and (min-width: 40em)",
  lg: "screen and (min-width: 64em)",
};

export const mediaQueries = Object.keys(mediaSizes).reduce((acc, size) => {
  acc[size] = (strings, ...interpolations) => css`
    @media ${mediaSizes[size]} {
      ${css(strings, ...interpolations)};
    }
  `;
  return acc;
}, {});

export const createSpacing = (base = DEFAULT_PADDING) => {
  return (input) => {
    if (typeof input !== "number" || input < 1) {
      return `${base}px`;
    }
    return `${base * input}px`;
  };
};

export const createRemCalc = (base = FONT_BASE) => {
  return (px) => {
    return `${(1 / base) * px}rem`;
  };
};

export const themes = {
  default: {
    palette: {
      initial: {
        contrastText: "#333",
        main: "#e1e1e1",
      },
      primary: {
        contrastText: "#ffffff",
        // main: '#0c98cd'
        main: "#292663",
      },
      secondary: {
        contrastText: "#ffffff",
        main: "#6c757d",
      },
      success: {
        contrastText: "#fff",
        main: "#59bd7b",
      },
      warning: {
        contrastText: "#fff",
        main: "#fbb157",
      },
      danger: {
        contrastText: "#fff",
        main: "#f75959",
      },
      light: {
        contrastText: "#fff",
        main: "#e2e6ea",
      },
      dark: {
        main: "#343a40",
      },
    },
    grid: {
      gutter: DEFAULT_PADDING,
      columns: 12,
    },
    spacing: createSpacing(),
    remCalc: createRemCalc(),
  },
};
