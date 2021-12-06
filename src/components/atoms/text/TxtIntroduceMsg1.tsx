import styled, { css } from "styled-components";
import "../../../styles/font.css";
import React from "react";
import { SlideUp } from "../../../styles/keyframes/slide";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: NanumSquareL;
  font-size: 35px;
  width: 380px;
  opacity: 1;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

const NormalTextStyle = styled.div`
  animation: 0.25s ease-in-out 0s ${SlideUp};
  ${({ delayTime }: { delayTime: number }) =>
    css`
      animation-delay: ${delayTime}s;
    `}
  animation-fill-mode: forwards;
  margin-left: auto;
  margin-bottom: 10px;
  opacity: 0;

  @media screen and (max-width: 700px) {
    * {
      margin: 0 auto;
      margin-bottom: 5px;
    }
  }
`;

const StrongTextStyle = styled(NormalTextStyle)`
  font-family: NanumSquareB;
`;

function TxtIntroduceMsg1() {
  return (
    <LayoutStyle>
      <NormalTextStyle delayTime={0.5}>반가워요!</NormalTextStyle>
      <NormalTextStyle delayTime={1.4}>
        지속적인 발전을 중시하는
      </NormalTextStyle>
      <StrongTextStyle delayTime={2.3}>
        프론트엔드 개발자 지망생
      </StrongTextStyle>
      <NormalTextStyle delayTime={3.2}>인사드립니다 :)</NormalTextStyle>
    </LayoutStyle>
  );
}

export default React.memo(TxtIntroduceMsg1);
