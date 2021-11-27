import styled from "styled-components";
import BtnFooterIntroduce from "../atoms/button/BtnFooterIntroduce";
import BtnFooterProfile from "../atoms/button/BtnFooterProfile";
import BtnFooterSkills from "../atoms/button/BtnFooterSkills";
import BtnFooterWelcome from "../atoms/button/BtnFooterWelcome";
import BtnFooterWorks from "../atoms/button/BtnFooterWorks";

type IsStrong = {
  welcome: boolean;
  profile: boolean;
  introduce: boolean;
  skills: boolean;
  works: boolean;
};

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

export default function FooterBtns({ isStrong }: { isStrong: IsStrong }) {
  return (
    <Styles>
      <BtnFooterWelcome isStrong={isStrong.welcome} />
      <BtnFooterProfile isStrong={isStrong.profile} />
      <BtnFooterIntroduce isStrong={isStrong.introduce} />
      <BtnFooterSkills isStrong={isStrong.skills} />
      <BtnFooterWorks isStrong={isStrong.works} />
    </Styles>
  );
}
