import styled from "styled-components";
import ImgProfileImage from "../atoms/Image/ImgProfileImage";
import TxtWelcomeMsg from "../atoms/text/TxtWelcomeMsg";

const Styles = styled.div`
  width: 405px;
  height: 320px;
  margin-bottom: 100px;
`;

export default function WelcomeTxtAndProfilePhoto() {
  return (
    <Styles>
      <ImgProfileImage />
      <TxtWelcomeMsg />
    </Styles>
  );
}
