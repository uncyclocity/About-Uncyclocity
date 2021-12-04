import CtnWorks from "../atoms/container/CtnWorks";
import TxtWorksDescription from "../atoms/text/TxtWorksDescription";
import WorksForestiaGitHubLinks from "../molecules/WorksForestiaGitHubLinks";
import WorksForestiaScreenShot from "../molecules/WorksForestiaScreenShot";
import WorksForestiaTitle from "../molecules/WorksForestiaTitle";
import WorksStyle from "./WorksStyle";

export default function WorksForestia({
  gitHubLink,
}: {
  gitHubLink: GitHubLink;
}) {
  return (
    <CtnWorks>
      <WorksStyle>
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
      </WorksStyle>
    </CtnWorks>
  );
}