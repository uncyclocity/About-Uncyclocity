import styled from "styled-components";
import BtnProfileGithub from "../atoms/button/BtnProfileGithub";
import BtnProfileVelog from "../atoms/button/BtnProfileVelog";

const LayoutStyle = styled.div`
  display: flex;
  width: 385px;
  margin: 20px 0;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    width: 300px;
    margin: 5px 0;
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
