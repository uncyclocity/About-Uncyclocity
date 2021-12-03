import styled from "styled-components";
import WorksForestia from "../organisms/WorksForestia";
import WorksReactTodoList from "../organisms/WorksReactTodoList";

const Styles = styled.div`
  width: 1150px;
  display: flex;
  justify-content: space-between;
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
      <WorksForestia gitHubLink={gitHubLinkForestia} />
      <WorksReactTodoList gitHubLink={gitHubLinkReactTodoList} />
    </Styles>
  );
}
