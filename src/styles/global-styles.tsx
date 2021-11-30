import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    width: 100%;
    height: 100vh;
  }

  html,
  body {
    margin: 0;
    font-family: NanumSquareR;
  }

  .outer {
    height: 100vh;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &::webkit-scrollbar {
      display: none;
    }
  }

  * {
    box-sizing: border-box;
    ::selection {
      background: #373737;
      color: white;
    }
  }
`;

export default GlobalStyle;
