import styled from "styled-components";
import BtnHeaderCall from "../atoms/button/BtnHeaderCall";
import BtnHeaderEmail from "../atoms/button/BtnHeaderEmail";
import BtnHeaderGitHub from "../atoms/button/BtnHeaderGitHub";

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

export default function HeaderBtns() {
  return (
    <Styles>
      <BtnHeaderGitHub />
      <BtnHeaderCall />
      <BtnHeaderEmail />
    </Styles>
  );
}
