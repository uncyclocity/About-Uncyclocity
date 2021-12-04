import CtnWorks from "../atoms/container/CtnWorks";
import TxtWorksDescription from "../atoms/text/TxtWorksDescription";
import WorksReactTodoListGitHubLinks from "../molecules/WorksReactTodoListGitHubLinks";
import WorksReactTodoListScreenShot from "../molecules/WorksReactTodoListScreenShot";
import WorksReactTodoListTitle from "../molecules/WorksReactTodoListTitle";
import WorksStyle from "./WorksStyle";

export default function WorksReactTodoList({
  gitHubLink,
}: {
  gitHubLink: GitHubLink;
}) {
  return (
    <CtnWorks>
      <WorksStyle>
        <WorksReactTodoListTitle />
        <WorksReactTodoListScreenShot />
        <TxtWorksDescription>
          React를 연습하면서
          <br />
          간단하게 구현해 본
          <br />
          투두리스트 웹입니다.
          <br />
          <br />
          Kakao OAuth 2.0 소셜 로그인을 통해
          <br />
          사용하실 수 있습니다.
          <br />
          투두리스트의 내용은 DB에 저장됩니다.
        </TxtWorksDescription>
        <WorksReactTodoListGitHubLinks gitHubLink={gitHubLink} />
      </WorksStyle>
    </CtnWorks>
  );
}
