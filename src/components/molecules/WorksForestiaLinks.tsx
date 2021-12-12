import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
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

export default function WorksForestiaLinks({
  workLinks,
}: {
  workLinks: WorkLinks;
}) {
  return (
    <LinksStyle>
      <LinkStyle onClick={workLinks.gotoFrontRepo}>
        <IcoBadge
          icon={<AiFillGithub />}
          text="Front-End"
          bgColor="#373737"
          txtColor="white"
        />
      </LinkStyle>
      <LinkStyle onClick={workLinks.gotoBackRepo}>
        <IcoBadge
          icon={<AiFillGithub />}
          text="Back-End"
          bgColor="#373737"
          txtColor="white"
        />
      </LinkStyle>
      <LinkStyle onClick={workLinks.gotoWorkLink}>
        <IcoBadge
          icon={<AiOutlineLink />}
          text="사용해보기"
          bgColor="#20c997"
          txtColor="white"
        />
      </LinkStyle>
    </LinksStyle>
  );
}
