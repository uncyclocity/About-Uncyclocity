import styled from "styled-components";
import CtnWorks from "../atoms/container/CtnWorks";
import TxtWorksDescription from "../atoms/text/TxtWorksDescription";
import WorksForestiaGitHubLinks from "../molecules/WorksForestiaGitHubLinks";
import WorksForestiaScreenShot from "../molecules/WorksForestiaScreenShot";
import WorksForestiaTitle from "../molecules/WorksForestiaTitle";

const LayoutStyles = styled.div`
  width: 550px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 15px 0;
  }
  @media screen and (max-width: 700px) {
    width: 355px;
    height: 480px;
    & > div {
      margin: 10px 0;
    }
  }
`;

export default function WorksForestia({
  gitHubLink,
}: {
  gitHubLink: GitHubLink;
}) {
  return (
    <CtnWorks>
      <LayoutStyles>
        <WorksForestiaTitle />
        <WorksForestiaScreenShot />
        <TxtWorksDescription>
          SSG 렌더링 방식 프레임워크인
          <br />
          Next.js를 학습하기 위해 제작한
          <br />
          게시판 사이트입니다.
          <br />
          <br />
          Google OAuth 2.0 소셜 로그인을 통해
          <br />
          게시물을 올리거나 댓글을 작성하는 등
          <br />
          커뮤 활동이 가능합니다.
        </TxtWorksDescription>
        <WorksForestiaGitHubLinks gitHubLink={gitHubLink} />
      </LayoutStyles>
    </CtnWorks>
  );
}
