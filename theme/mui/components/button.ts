// ** Type Import
import { OwnerStateThemeType } from "..";

const Button = {
  styleOverrides: {
    root: ({ ownerState, theme }: OwnerStateThemeType) => ({
      borderRadius: "0.5rem",
      boxShadow: "none",
    }),
  },
};
export default Button;
