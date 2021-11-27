import styled from "styled-components";
import "../../../styles/font.css";
import Typist from "react-text-typist";

const NormalTextStyle = styled.div`
  font-family: NanumSquareL;
  font-size: 60px;
  color: #404040;
`;

const StrongTextStyle = styled.div`
  font-family: NanumSquareB;
`;

export default function TxtWelcomeMsg() {
  return (
    <NormalTextStyle>
      <Typist sentences={["프론트엔드"]} loop={false} showCursor={false} />
      <br />
      <Typist
        sentences={["개발자"]}
        loop={false}
        startDelay={500}
        showCursor={false}
      />
      <br />
      <StrongTextStyle>
        <Typist
          sentences={["이성범입니다 :)"]}
          loop={false}
          startDelay={800}
          showCursor={true}
        />
      </StrongTextStyle>
    </NormalTextStyle>
  );
}
