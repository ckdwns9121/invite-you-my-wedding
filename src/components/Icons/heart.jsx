import styled from "styled-components";

export default function HeartIcon() {
  return <StyledHeartIcon src={`${process.env.PUBLIC_URL}/image/heart.png`} />;
}

const StyledHeartIcon = styled.img`
  width: 15px;
`;
