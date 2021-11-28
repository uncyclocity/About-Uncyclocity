import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    width: 100%;
    height: 100%;
  }

  html,
  body {
    margin: 0;
    font-family: NanumSquareR;
  }

  .outer {
    height: 100vh;
    overflow-y: hidden;

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