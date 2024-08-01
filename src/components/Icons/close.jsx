import styled from "styled-components";

export default function CloseSvg() {
  return <StyledImage src={`${process.env.PUBLIC_URL}/image/close-line-icon.png`} />;
}

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`;
