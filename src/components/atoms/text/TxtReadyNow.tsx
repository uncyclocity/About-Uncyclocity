import styled from "styled-components";

const NormalTxtStyle = styled.div`
  display: flex;
  font-size: 60px;
  font-family: NanumSquareL;
`;

const StrongTxtStyle = styled.div`
  font-family: NanumSquareB;
`;

export default function TxtReadyNow() {
  return (
    <NormalTxtStyle>
      <StrongTxtStyle>준비중</StrongTxtStyle>입니다
    </NormalTxtStyle>
  );
}
