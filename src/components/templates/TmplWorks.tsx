import styled from "styled-components";
import WorksForestia from "../organisms/WorksForestia";
import WorksReactTodoList from "../organisms/WorksReactTodoList";

const Styles = styled.div`
  width: 1150px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    width: 100vw;
    & > div {
      margin: 0 10px;
    }
  }
`;

const LRMargin = styled.div`
  margin: 0 !important;
  @media screen and (max-width: 700px) {
    padding: 0 0.1px;
  }
`;

export default function TmplWorks({
  gitHubLinkForestia,
  gitHubLinkReactTodoList,
}: {
  gitHubLinkForestia: GitHubLink;
  gitHubLinkReactTodoList: GitHubLink;
}) {
  return (
    <Styles>
      <LRMargin />
      <WorksForestia gitHubLink={gitHubLinkForestia} />
      <WorksReactTodoList gitHubLink={gitHubLinkReactTodoList} />
      <LRMargin />
    </Styles>
  );
}
