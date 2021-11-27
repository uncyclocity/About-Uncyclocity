import styled from "styled-components";
import TxtReadyNow from "../atoms/text/TxtReadyNow";

const Styles = styled.div`
  width: 330px;
  margin-bottom: 100px;
`;

export default function ReadyNowTxt() {
  return (
    <Styles>
      <TxtReadyNow />
    </Styles>
  );
}
