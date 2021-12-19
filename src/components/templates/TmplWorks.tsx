import styled, { css } from "styled-components";
import { SlideUp } from "../../styles/keyframes/slide";
import BtnWorksSlide from "../atoms/button/BtnWorksSlide";
import WorksForestia from "../organisms/WorksForestia";
import WorksReactTodoList from "../organisms/WorksReactTodoList";
import Slide from "../utils/slide";
import SliderContainer from "../utils/sliderContainer";
import { GrNext, GrPrevious } from "react-icons/gr";

const Styles = styled.div`
  width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    width: 100vw;
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
  slideNum,
  slideNumSetter,
}: {
  forestiaLinks: WorkLinks;
  reactTodoListLinks: WorkLinks;
  slideNum: number;
  slideNumSetter: (num: number) => void;
}) {
  return (
    <Styles>
      {!matchMedia("screen and (max-width: 700px)").matches ? (
        <>
          <ViewAnimation delayTime={0.2}>
            <WorksForestia workLinks={forestiaLinks} />
          </ViewAnimation>
          <ViewAnimation delayTime={0.5}>
            <WorksReactTodoList workLinks={reactTodoListLinks} />
          </ViewAnimation>
        </>
      ) : (
        <>
          <BtnWorksSlide
            icon={<GrPrevious />}
            slideNumSetter={slideNumSetter}
            slideNum={slideNum - 1}
          />
          <SliderContainer slideNum={slideNum}>
            <Slide>
              <ViewAnimation delayTime={0.2}>
                <WorksForestia workLinks={forestiaLinks} />
              </ViewAnimation>
            </Slide>
            <Slide>
              <ViewAnimation delayTime={0.5}>
                <WorksReactTodoList workLinks={reactTodoListLinks} />
              </ViewAnimation>
            </Slide>
          </SliderContainer>
          <BtnWorksSlide
            icon={<GrNext />}
            slideNumSetter={slideNumSetter}
            slideNum={slideNum + 1}
          />
        </>
      )}
    </Styles>
  );
}
