import styled from "styled-components";

export default function Ending() {
  return (
    <Container>
      <Flex>
        <Text>행복하게 잘 살겠습니다.</Text>
      </Flex>
    </Container>
  );
}

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  padding-bottom: 100px;
`;

const Text = styled.p`
  @media (max-width: 414px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
  font-size: 1.2rem;
`;
