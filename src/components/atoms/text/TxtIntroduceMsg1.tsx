import styled from "styled-components";
import "../../../styles/font.css";
import Typist from "react-text-typist";
import React from "react";

const NormalTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: NanumSquareL;
  font-size: 35px;
  width: 380px;

  * {
    margin-left: auto;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 700px) {
    font-size: 20px;

    * {
      margin: 0 auto;
      margin-bottom: 5px;
    }
  }
`;

const StrongTextStyle = styled.div`
  font-family: NanumSquareB;
`;

function TxtIntroduceMsg1() {
  return (
    <NormalTextStyle>
      <Typist
        sentences={["반가워요!"]}
        loop={false}
        showCursor={false}
        startDelay={300}
      />
      <Typist
        sentences={["지속적인 발전을 중시하는"]}
        loop={false}
        startDelay={800}
        showCursor={false}
      />
      <StrongTextStyle>
        <Typist
          sentences={["프론트엔드 개발자 지망생"]}
          loop={false}
          startDelay={2000}
          showCursor={false}
        />
      </StrongTextStyle>
      <Typist
        sentences={["인사드립니다 :)"]}
        loop={false}
        startDelay={3200}
        showCursor={true}
      />
    </NormalTextStyle>
  );
}

export default React.memo(TxtIntroduceMsg1);
