import styled from "styled-components";
import CtnWorks from "../atoms/container/CtnWorks";
import TxtWorksDescription from "../atoms/text/TxtWorksDescription";
import WorksReactTodoListGitHubLinks from "../molecules/WorksReactTodoListGitHubLinks";
import WorksReactTodoListScreenShot from "../molecules/WorksReactTodoListScreenShot";
import WorksReactTodoListTitle from "../molecules/WorksReactTodoListTitle";

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

export default function WorksReactTodoList({
  gitHubLink,
}: {
  gitHubLink: GitHubLink;
}) {
  return (
    <CtnWorks>
      <LayoutStyles>
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
      </LayoutStyles>
    </CtnWorks>
  );
}
