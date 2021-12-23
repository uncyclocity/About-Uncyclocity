import { SiJavascript, SiTypescript } from "react-icons/si";
import IcoBadge from "../atoms/badge/IcoBadge";
import TxtSkillsLanguage from "../atoms/text/TxtSkillsLanguage";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsLanguage() {
  return (
    <LayoutStyle>
      <TxtSkillsLanguage />
      <IcoLinesStyle>
        <IcoStyle>
          <IcoBadge
            icon={<SiTypescript />}
            text="TypeScript"
            bgColor="#3178C6"
            txtColor="white"
          />
          <IcoBadge
            icon={<SiJavascript />}
            text="JavaScript"
            bgColor="#F7DF1E"
            txtColor="black"
          />
        </IcoStyle>
      </IcoLinesStyle>
    </LayoutStyle>
  );
}
