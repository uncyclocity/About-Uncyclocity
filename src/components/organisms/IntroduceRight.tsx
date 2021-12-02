import styled from "styled-components";
import TxtIntroduceMsg1 from "../atoms/text/TxtIntroduceMsg1";

const Styles = styled.div`
  height: 394px;

  @media screen and (max-width: 700px) {
    height: 130px;
  }
`;

export default function IntroduceRight() {
  return (
    <Styles>
      <TxtIntroduceMsg1 />
    </Styles>
  );
}
