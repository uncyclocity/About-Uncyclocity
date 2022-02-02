import styled from "styled-components";
import { FadeIn } from "../../styles/keyframes/fade";
import TxtWelcomeScrollHint from "../atoms/text/TxtWelcomeScrollHint";

const Styles = styled.div`
  margin: 50px 0;
  height: 50%;
  opacity: 0;
  animation: 0.25s ease-in-out 2s ${FadeIn};
  animation-fill-mode: forwards;

  @media screen and (max-width: 700px) {
    margin: 50px 0;
  }
`;

export default function WelcomeScrollHint({ mQuery }: { mQuery: boolean }) {
  return (
    <Styles>
      <TxtWelcomeScrollHint mQuery={mQuery} />
    </Styles>
  );
}
