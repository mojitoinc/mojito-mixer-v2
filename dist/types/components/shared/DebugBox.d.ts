import { BoxProps } from "@mui/material";
import React from "react";
export interface DebugBoxProps extends BoxProps {
    compact?: boolean;
    value?: any | undefined;
}
export declare const DebugBox: React.FC<DebugBoxProps>;
