import styled from "styled-components";
import CtnIntroduceProfile from "../atoms/container/CtnIntroduceProfile";
import ImgProfileImage from "../atoms/Image/ImgProfileImage";
import TxtIntroduceNameAndNickname from "../atoms/text/TxtIntroduceNameAndNickname";

const OuterStyle = styled.div`
  margin-bottom: 30px;
`;

const InnerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80px;
  }
`;

export default function IntroduceProfile() {
  return (
    <OuterStyle>
      <CtnIntroduceProfile>
        <InnerStyle>
          <ImgProfileImage />
          <TxtIntroduceNameAndNickname />
        </InnerStyle>
      </CtnIntroduceProfile>
    </OuterStyle>
  );
}
