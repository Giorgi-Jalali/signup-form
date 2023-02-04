import styled from "styled-components";

export default function Title() {
  return (
    <TitleContainer>
      <H1>Learn to code by watching others</H1>
      <Description>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </Description>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  width: 80vw;
  max-width: 525px;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.291667px;
  margin-bottom: 16px;

  @media (min-width: 1440px) {
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -0.520833px;
    text-align: start;
  }
`;

const Description = styled.p`
  width: 90vw;
  max-width: 525px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 64px;

  @media (min-width: 1440px) {
    text-align: start;
  }
`;
