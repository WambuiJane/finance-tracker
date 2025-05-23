import { createTheme, Theme, alpha } from "@mui/material/styles";
import { PaletteOptions as MuiPaletteOptions } from "@mui/material";
import colors from "./colors";

// Declare module augmentation for custom palette colors
declare module "@mui/material/styles" {
  interface Palette {
    landingPage: {
      main: string;
      dark: string;
    };
    navbar: {
      main: string;
    };
    primaryMuted: {
      main: string;
      hover: string;
    };
    neutral: {
      main: string;
    };
  }

  interface PaletteOptions {
    landingPage?: {
      main: string;
      dark: string;
    };
    navbar?: {
      main: string;
    };
    primaryMuted?: {
      main: string;
      hover: string;
    };
    neutral?: {
      main: string;
    };
  }
}

// Declare module augmentation for custom button variants
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    landingPage: true;
    navbar: true;
    primaryMuted: true;
  }
}

// Create the theme based on login state
const theme = (isLoggedIn: boolean = false): Theme => {
  const baseTheme: MuiPaletteOptions = {
    // Common colors for both themes
    neutral: {
      main: colors.app["base-content-neutral"],
    },
  };

  // Pre-login theme colors
  const preLoginPalette: MuiPaletteOptions = {
    ...baseTheme,
    primary: {
      main: colors.landingPage.main,
      contrastText: "#000000",
    },
    landingPage: colors.landingPage,
    navbar: {
      main: colors.navbar,
    },
  };

  // Post-login theme colors
  const postLoginPalette: MuiPaletteOptions = {
    ...baseTheme,
    primary: {
      main: colors.app.primary,
      dark: colors.app["primary-focus"],
      contrastText: colors.app["primary-content"],
    },
    primaryMuted: {
      main: colors.app["primary-muted"],
      hover: colors.app["primary-muted-hover"],
    },
  };

  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1400,
      },
    },
    palette: isLoggedIn ? postLoginPalette : preLoginPalette,
    components: {
      MuiButton: {
        variants: [
          // Landing page button variant
          {
            props: { variant: "landingPage" },
            style: {
              backgroundColor: colors.landingPage.main,
              "&:hover": {
                backgroundColor: colors.landingPage.dark,
              },
            },
          },
          // Navbar button variant
          {
            props: { variant: "navbar" },
            style: {
              backgroundColor: colors.navbar,
              color: "#ffffff",
              "&:hover": {
                backgroundColor: alpha(colors.navbar, 0.8),
              },
            },
          },
          // Primary muted button variant (in-app)
          {
            props: { variant: "primaryMuted" },
            style: {
              backgroundColor: colors.app["primary-muted"],
              color: colors.app.primary,
              "&:hover": {
                backgroundColor: colors.app["primary-muted-hover"],
              },
            },
          },
        ],
      },
    },
  });
};

export default theme;
