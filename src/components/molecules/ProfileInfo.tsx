import styled from "styled-components";
import TxtProfileInfo from "../atoms/text/TxtProfileInfo";

const Styles = styled.div`
  * {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 700px) {
    * {
      margin-top: 2.5px;
      margin-bottom: 2.5px;
    }
  }
`;

export default function ProfileInfo() {
  return (
    <Styles>
      <TxtProfileInfo
        title="학력"
        text="광주소프트웨어마이스터고 소프트웨어개발과"
        term="2018. 03 ~ 2021. 01"
      />
      <TxtProfileInfo
        title="경력"
        text="쉬프트정보통신(주) 솔루션 개발자"
        term="2020. 11 ~"
      />
      <TxtProfileInfo
        title="병역"
        text="산업기능요원 현역 (육군훈련소 수료 완료)"
        term="2021. 06 ~"
      />
    </Styles>
  );
}
