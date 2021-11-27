import styled from "styled-components";
import { AiTwotoneMail } from "react-icons/ai";

const Styles = styled.div`
  font-size: 20px;
  color: #808080;
`;

export default function BtnHeaderEmail() {
  return (
    <Styles>
      <AiTwotoneMail />
    </Styles>
  );
}
