import styled, { css } from "styled-components";
import { SlideUp } from "../../styles/keyframes/slide";
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

const ViewAnimation = styled.div`
  animation: 0.25s ease-in-out 0s ${SlideUp};
  ${({ delayTime }: { delayTime: number }) =>
    css`
      animation-delay: ${delayTime}s;
    `}
  animation-fill-mode: forwards;
  opacity: 0;
`;

export default function TmplWorks({
  forestiaLinks,
  reactTodoListLinks,
}: {
  forestiaLinks: WorkLinks;
  reactTodoListLinks: WorkLinks;
}) {
  return (
    <Styles>
      <LRMargin />
      <ViewAnimation delayTime={0.2}>
        <WorksForestia workLinks={forestiaLinks} />
      </ViewAnimation>
      <ViewAnimation delayTime={0.5}>
        <WorksReactTodoList workLinks={reactTodoListLinks} />
      </ViewAnimation>
      <LRMargin />
    </Styles>
  );
}
