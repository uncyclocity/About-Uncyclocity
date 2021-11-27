import styled from "styled-components";
import { IoIosCall } from "react-icons/io";

const Styles = styled.div`
  font-size: 20px;
  color: #808080;
`;

export default function BtnHeaderCall() {
  return (
    <Styles>
      <IoIosCall />
    </Styles>
  );
}
