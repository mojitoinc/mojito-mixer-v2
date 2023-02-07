import React, { useCallback } from "react";
import CopyIcon from "@mui/icons-material/ContentCopy";
import { SxProps, Theme, useTheme } from "@mui/material";
import { MixTheme } from "@lib/theme";

interface CopyProps {
  copyValue: string;
  sx?: SxProps<Theme>;
}
const CopyButton = ({ copyValue,sx }: CopyProps) => {
  const theme = useTheme<MixTheme>();

  const onClickCopy = useCallback(() => {
    navigator.clipboard.writeText(copyValue ?? "");
  }, [copyValue]);

  return (
    <CopyIcon
      width="12px"
      height="12px"
      onClick={onClickCopy}
      sx={{
        color: theme.global?.confirmationColors?.copyIconColor,
        marginLeft: "8px",
        alignSelf: "flex-end",
        "&:active": {
          transform: "scale(0.85, 0.85)",
          opacity: [0.9, 0.8, 0.7],
        },
        ...sx
      }}
    />
  );
};
export default CopyButton;
