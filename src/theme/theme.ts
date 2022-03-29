import constPalletes from "../Tools/palette";

export type ThemeType = typeof themes; // This is the type definition for my theme object.

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const themes = {
  palette: {
    buttons: {
     
      light: {
        primary: "",
        secondary: "",
        default: ""
      },
      dark: {
        primary: constPalletes["background-primary"],
        secondary: constPalletes["background-secondary"],
        default: constPalletes["background-default"],

        primaryHover: constPalletes["background-primary-hover"],
        secondaryHover: constPalletes["background-secondary-hover"],
        defaultHover: constPalletes["background-default-hover"],

        textLight: "white"
      },
    },
    light: {
      backgroundColor: "red",
      textColor: "white",
      borderColor: "yellow",
    },
    dark: {
      backgroundColor: "black",
      textColor: "white",
      borderColor: "black",
      inputTextColor: constPalletes["input-color-default"],
    },
  },
  breakPoints: {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  },
  spacing: {},
};

const theme = themes; // set the light theme as the default.
export default theme;
