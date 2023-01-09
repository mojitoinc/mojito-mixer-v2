import { Box, useTheme } from "@mui/material";
import React from "react";
import { Icons } from "../icons";
import { MixTheme } from "../theme/ThemeOptions";

interface HeaderProps {
  onPressBack?: () => void;
  backText?: string;
}

const Header = ({}: HeaderProps) => {
  const theme = useTheme<MixTheme>();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.global?.background,
      }}
    >
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent:'center',
          display:'flex'
        }}
      >
        <img src={Icons.logo} width={"163px"} height={"37px"} />
      </Box>
    </Box>
  );
};

export default Header;
