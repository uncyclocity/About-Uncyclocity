import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const LayoutStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    transition: 0.2s all ease-in-out;
    background: #5e5e5e;
  }

  &:not(:hover) {
    transition: 0.2s all ease-in-out;
    background: #404040;
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

export default function BtnProfileGithub({ onClick }: { onClick: () => void }) {
  return (
    <LayoutStyle onClick={onClick}>
      <IconStyle>
        <AiFillGithub />
      </IconStyle>
      <TextStyle>uncyclocity</TextStyle>
    </LayoutStyle>
  );
}
