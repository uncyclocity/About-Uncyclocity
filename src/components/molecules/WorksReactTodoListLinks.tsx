import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import styled from "styled-components";
import IcoBadge from "../atoms/badge/IcoBadge";

const LinksStyle = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    margin: 0 5px;
  }
`;

export default function WorksReactTodoListLinks({
  workLinks,
}: {
  workLinks: WorkLinks;
}) {
  return (
    <LinksStyle>
      <IcoBadge
        icon={<AiFillGithub />}
        text="Front-End"
        bgColor="#373737"
        txtColor="white"
        onClick={workLinks.gotoFrontRepo}
      />

      <IcoBadge
        icon={<AiFillGithub />}
        text="Back-End"
        bgColor="#373737"
        txtColor="white"
        onClick={workLinks.gotoBackRepo}
      />
      <IcoBadge
        icon={<AiOutlineLink />}
        text="사용해보기"
        bgColor="#20c997"
        txtColor="white"
        onClick={workLinks.gotoWorkLink}
      />
    </LinksStyle>
  );
}
