import styled from "styled-components";
import TxtIntroduceMsg1 from "../atoms/text/TxtIntroduceMsg1";

const Styles = styled.div`
  height: 394px;
`;

export default function IntroduceRight() {
  return (
    <Styles>
      <TxtIntroduceMsg1 />
    </Styles>
  );
}
