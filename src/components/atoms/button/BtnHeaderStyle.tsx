import styled from "styled-components";

const BtnHeaderStyle = styled.div`
  font-size: 25px;
  cursor: pointer;

  &:hover {
    transition: 0.2s all ease-in-out;
    color: #4b4b4b;
  }

  &:not(:hover) {
    transition: 0.2s all ease-in-out;
    color: #808080;
  }
`;

export default BtnHeaderStyle;
