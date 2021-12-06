import styled, { css } from "styled-components";
import { SlideLeft } from "../../styles/keyframes/slide";
import SkillsStrongs from "../molecules/SkillsStrongs";
import SkillsUseds from "../molecules/SkillsUseds";
import SkillsUsings from "../molecules/SkillsUsings";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div + div {
    margin-top: 50px;
  }

  @media screen and (max-width: 700px) {
    & > div + div {
      margin-top: 30px;
    }
  }
`;

const ViewAnimation = styled.div`
  animation: 0.25s ease-in-out 0s ${SlideLeft};
  ${({ delayTime }: { delayTime: number }) =>
    css`
      animation-delay: ${delayTime}s;
    `}
  animation-fill-mode: forwards;
  opacity: 0;
`;

export default function SkillsStrongAndUsing() {
  return (
    <Styles>
      <ViewAnimation delayTime={0.2}>
        <SkillsStrongs />
      </ViewAnimation>
      <ViewAnimation delayTime={0.4}>
        <SkillsUsings />
      </ViewAnimation>
      <ViewAnimation delayTime={0.6}>
        <SkillsUseds />
      </ViewAnimation>
    </Styles>
  );
}
