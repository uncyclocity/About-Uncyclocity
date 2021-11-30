import styled from "styled-components";
import ImgProfileImage from "../atoms/Image/ImgProfileImage";
import TxtWelcomeMsg from "../atoms/text/TxtWelcomeMsg";
import WelcomeScrollHint from "../morecules/WelcomeScrollHint";

const Styles = styled.div`
  width: 405px;
  height: 320px;
  margin-bottom: 100px;

  @media screen and (max-width: 700px) {
    width: 268px;
  }
`;

export default function WelcomeTxtAndProfilePhoto() {
  return (
    <Styles>
      <ImgProfileImage />
      <TxtWelcomeMsg />
      <WelcomeScrollHint />
    </Styles>
  );
}
