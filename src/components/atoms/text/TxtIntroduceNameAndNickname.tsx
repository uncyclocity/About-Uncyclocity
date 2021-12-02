import styled from "styled-components";

const LayoutStyle = styled.div`
  width: 100%;

  * {
    margin: 2.5px 0;
  }
`;

const NameStyle = styled.div`
  font-family: NanumSquareB;
  font-size: 25px;
`;

const NicknameStyle = styled.div`
  font-size: 20px;
`;

const EngNicknameStyle = styled.div`
  font-size: 18px;
  color: #808080;
`;

export default function TxtIntroduceNameAndNickname() {
  return (
    <LayoutStyle>
      <NameStyle>이성범</NameStyle>
      <NicknameStyle>a.k.a. 백괴</NicknameStyle>
      <EngNicknameStyle>@uncyclocity</EngNicknameStyle>
    </LayoutStyle>
  );
}
