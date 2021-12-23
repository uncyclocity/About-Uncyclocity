import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
} from "react-icons/si";
import IcoBadge from "../atoms/badge/IcoBadge";
import TxtSkillsStrong from "../atoms/text/TxtSkillsStrong";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsStrongs() {
  return (
    <LayoutStyle>
      <TxtSkillsStrong />
      <IcoLinesStyle>
        <IcoStyle>
          <IcoBadge
            icon={<SiJavascript />}
            text="JavaScript"
            bgColor="#F7DF1E"
            txtColor="black"
          />
          <IcoBadge
            icon={<SiReact />}
            text="React"
            bgColor="#61DAFB"
            txtColor="black"
          />
        </IcoStyle>
        <IcoStyle>
          <IcoBadge
            icon={<SiNextdotjs />}
            text="Next.js"
            bgColor="#000000"
            txtColor="white"
          />
          <IcoBadge
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
