import styled from "styled-components";
import { FadeIn } from "../../styles/keyframes/fade";
import ImgProfileImage from "../atoms/Image/ImgProfileImage";
import TxtWelcomeMsg from "../atoms/text/TxtWelcomeMsg";
import WelcomeScrollHint from "../molecules/WelcomeScrollHint";

const Styles = styled.div`
  width: 450px;
  height: 320px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-right: 68%;
    width: 100px;
    opacity: 0;
    animation: 1s ease-in-out 0s ${FadeIn};
    animation-fill-mode: forwards;
  }

  @media screen and (max-width: 700px) {
    width: 268px;
    margin-bottom: 60px;

    img {
      margin-right: 80%;
      width: 60px;
    }
  }
`;

export default function WelcomeTxtAndProfilePhoto({
  mQuery,
}: {
  mQuery: boolean;
}) {
  return (
    <Styles>
      <ImgProfileImage />
      <TxtWelcomeMsg />
      <WelcomeScrollHint mQuery={mQuery} />
    </Styles>
  );
}
