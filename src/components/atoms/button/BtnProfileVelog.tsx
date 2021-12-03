import styled from "styled-components";
import { FaVimeoSquare } from "react-icons/fa";

const LayoutStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background: #53e3b8;
    transition: 0.2s all ease-in-out;
  }

  &:not(:hover) {
    background: #20c997;
    transition: 0.2s all ease-in-out;
  }
`;

const IconStyle = styled.div`
  color: white;
  font-size: 35px;
  height: 35px;

  @media screen and (max-width: 700px) {
    font-size: 18px;
    height: 18px;
  }
`;

const TextStyle = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 10px;
  font-family: NanumSquareB;

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export default function BtnProfileVelog({ onClick }: { onClick: () => void }) {
  return (
    <LayoutStyle onClick={onClick}>
      <IconStyle>
        <FaVimeoSquare />
      </IconStyle>
      <TextStyle>uncyclocity.log</TextStyle>
    </LayoutStyle>
  );
}
