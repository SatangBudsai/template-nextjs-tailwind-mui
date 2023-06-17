import { createTheme } from "@mui/material/styles";
const colors = require("@/theme/colors");

const theme = createTheme({
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
    typography: {
        allVariants: {
            fontFamily: "Prompt",
        }
    },
});

export default theme;
