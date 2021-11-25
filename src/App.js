import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    display: flex;
    justify-content: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      준비중
    </>
  );
}

export default App;
