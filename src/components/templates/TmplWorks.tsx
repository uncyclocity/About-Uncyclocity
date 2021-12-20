import styled from "styled-components";
import BtnWorksSlide from "../atoms/button/BtnWorksSlide";
import WorksForestia from "../organisms/WorksForestia";
import WorksReactTodoList from "../organisms/WorksReactTodoList";
import Slide from "../utils/slide";
import SliderContainer from "../utils/sliderContainer";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSampleState } from "../context/pageContext";

const Styles = styled.div`
  width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    width: 100vw;
  }
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
  const { mQuery } = useSampleState();

  return (
    <Styles>
      {!mQuery ? (
        <>
          <WorksForestia workLinks={forestiaLinks} />
          <WorksReactTodoList workLinks={reactTodoListLinks} />
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
              <WorksForestia workLinks={forestiaLinks} />
            </Slide>
            <Slide>
              <WorksReactTodoList workLinks={reactTodoListLinks} />
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
