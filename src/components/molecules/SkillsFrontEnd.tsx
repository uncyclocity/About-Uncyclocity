import { SiReact, SiNextdotjs, SiStyledcomponents } from "react-icons/si";
import BgeBadge from "../atoms/badge/BgeBadge";
import TxtSkillsTitle from "../atoms/text/TxtSkillsTitle";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsFrontEnd() {
  return (
    <LayoutStyle>
      <TxtSkillsTitle text="Front-End" />
      <IcoLinesStyle>
        <IcoStyle>
          <BgeBadge
            icon={<SiReact />}
            text="React"
            bgColor="#61DAFB"
            txtColor="black"
          />
          <BgeBadge
            icon={<SiNextdotjs />}
            text="Next.js"
            bgColor="#000000"
            txtColor="white"
          />
        </IcoStyle>
        <IcoStyle>
          <BgeBadge
            icon={<SiStyledcomponents />}
            text="Styled-Components"
            bgColor="#DB7093"
            txtColor="white"
          />
        </IcoStyle>
      </IcoLinesStyle>
    </LayoutStyle>
  );
}
