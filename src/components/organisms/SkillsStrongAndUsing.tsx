import styled from "styled-components";
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

export default function SkillsStrongAndUsing() {
  return (
    <Styles>
      <SkillsStrongs />
      <SkillsUsings />
      <SkillsUseds />
    </Styles>
  );
}
