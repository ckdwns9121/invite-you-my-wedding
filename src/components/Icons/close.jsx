import React from "react";
import styled from "styled-components";

export default function CloseIcon({ size = "20px", color = "currentColor", ...props }) {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      aria-hidden="true"
      focusable="false"
      tabIndex="-1"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  vertical-align: middle;
`;

CloseIcon.displayName = "CloseIcon";
