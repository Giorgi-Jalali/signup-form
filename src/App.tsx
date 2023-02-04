import styled, { createGlobalStyle } from "styled-components";

import mobileBackground from "./assets/bg-intro-mobile.png";
import desktopBackground from "./assets/bg-intro-desktop.png";

import Title from "./components/Title";
import FormContainer from "./components/FormContainer";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Title />
        <FormContainer />
      </Main>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: url(${mobileBackground});
    background-color: rgba(255, 121, 121, 1);
    color: white;
    width: 100wh;
    min-height: 100vh;
    overflow-x: hidden;

    @media (min-width: 1440px) {
      background: url(${desktopBackground});
      background-color: rgba(255, 121, 121, 1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
  margin-bottom: 68px;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    gap: 45px;
  }
`;
