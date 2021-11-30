import styled from "styled-components";
import { FadeIn } from "../../styles/keyframes/fade";
import TxtWelcomeScrollHint from "../atoms/text/TxtWelcomeScrollHint";

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: 0.25s ease-in-out 2s ${FadeIn};
  animation-fill-mode: forwards;
`;

export default function WelcomeScrollHint() {
  return (
    <Styles>
      <TxtWelcomeScrollHint />
    </Styles>
  );
}
