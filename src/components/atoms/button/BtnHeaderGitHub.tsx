import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

const Styles = styled.div`
  font-size: 20px;
  color: #808080;
`;

export default function BtnHeaderGitHub() {
  return (
    <Styles>
      <BsGithub />
    </Styles>
  );
}
