import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";
import IcoBadge from "../atoms/icon/IcoBadge";

const LinksStyle = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    margin: 0 5px;
  }
`;

const LinkStyle = styled.div`
  cursor: pointer;
`;

export default function WorksForestiaGitHubLinks({
  gitHubLink,
}: {
  gitHubLink: GitHubLink;
}) {
  return (
    <LinksStyle>
      <LinkStyle onClick={gitHubLink.gotoFrontRepo}>
        <IcoBadge
          icon={<AiFillGithub />}
          text="Forestia-Front"
          bgColor="#373737"
          txtColor="white"
        />
      </LinkStyle>
      <LinkStyle onClick={gitHubLink.gotoBackRepo}>
        <IcoBadge
          icon={<AiFillGithub />}
          text="Forestia-Back"
          bgColor="#373737"
          txtColor="white"
        />
      </LinkStyle>
    </LinksStyle>
  );
}
