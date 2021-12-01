import styled from "styled-components";
import BtnProfileGithub from "../atoms/button/BtnProfileGithub";
import BtnProfileVelog from "../atoms/button/BtnProfileVelog";

const LayoutStyle = styled.div`
  display: flex;
  width: 360px;
  margin: 10px 0;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    width: 280px;
    margin: 0px;
  }
`;

export default function ProfileLink({
  gotoGithub,
  gotoVelog,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
}) {
  return (
    <LayoutStyle>
      <BtnProfileGithub onClick={gotoGithub} />
      <BtnProfileVelog onClick={gotoVelog} />
    </LayoutStyle>
  );
}
