import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

function FinanceFlowLogo(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 135 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="22"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="bold"
      >
        <tspan fill="#325773">Finance</tspan>
        <tspan fill="#6d83b5">Flow</tspan>
      </text>
    </SvgIcon>
  );
}

export default FinanceFlowLogo;
