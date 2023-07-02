import { Theme } from "@mui/material/styles";
import { ComponentsPropsList } from "@mui/material";

export type OwnerStateThemeType = {
  theme: Theme;
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] &
    Record<string, unknown>;
};

import { createTheme } from "@mui/material/styles";
import muiComponents from "./components";
const colors = require("@/theme/colors");

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary.DEFAULT,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary.DEFAULT,
      contrastText: colors.white,
    },
    success: {
      main: colors.success.DEFAULT,
      contrastText: colors.white,
    },
    error: {
      main: colors.danger.DEFAULT,
      contrastText: colors.white,
    },
    warning: {
      main: colors.warning.DEFAULT,
      contrastText: colors.white,
    },
  },
  components: {
    MuiButton: muiComponents.Button,
  },
});

export default CustomTheme;
