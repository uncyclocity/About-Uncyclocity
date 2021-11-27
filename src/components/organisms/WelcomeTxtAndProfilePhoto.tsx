import styled from "styled-components";
import ImgProfileImage from "../atoms/Image/ImgProfileImage";
import TxtWelcomeMsg from "../atoms/text/TxtWelcomeMsg";

const Styles = styled.div`
  width: 405px;
  height: 320px;
`;

export default function WelcomeTxtAndProfilePhoto() {
  return (
    <Styles>
      <TxtWelcomeMsg />
      <ImgProfileImage />
    </Styles>
  );
}
