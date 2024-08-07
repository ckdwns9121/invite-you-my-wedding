import React from "react";
import styled from "styled-components";

export default function HeartIcon({ size = "15px", color = "currentColor", ...props }) {
  return (
    <StyledHeartIcon
      src={`${process.env.PUBLIC_URL}/image/heart.png`}
      alt=""
      role="img"
      aria-hidden="true"
      size={size}
      focusable="false"
      tabIndex="-1"
      {...props}
    />
  );
}

const StyledHeartIcon = styled.img`
  width: ${(props) => props.size};
  height: auto;
  vertical-align: middle;
`;

HeartIcon.displayName = "HeartIcon";
