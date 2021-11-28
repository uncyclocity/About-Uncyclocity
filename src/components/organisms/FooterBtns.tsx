import styled from "styled-components";
import BtnFooterIntroduce from "../atoms/button/BtnFooterIntroduce";
import BtnFooterProfile from "../atoms/button/BtnFooterProfile";
import BtnFooterSkills from "../atoms/button/BtnFooterSkills";
import BtnFooterWelcome from "../atoms/button/BtnFooterWelcome";
import BtnFooterWorks from "../atoms/button/BtnFooterWorks";

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

export default function FooterBtns({ isStrong }: { isStrong: number }) {
  return (
    <Styles>
      <BtnFooterWelcome isStrong={isStrong} />
      <BtnFooterProfile isStrong={isStrong} />
      <BtnFooterIntroduce isStrong={isStrong} />
      <BtnFooterSkills isStrong={isStrong} />
      <BtnFooterWorks isStrong={isStrong} />
    </Styles>
  );
}
