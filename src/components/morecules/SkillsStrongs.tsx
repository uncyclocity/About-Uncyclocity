import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs, SiStyledcomponents } from "react-icons/si";
import IcoSkillsSkill from "../atoms/icon/IcoSkillsSkill";
import TxtSkillsStrong from "../atoms/text/TxtSkillsStrong";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsStrongs() {
  return (
    <LayoutStyle>
      <TxtSkillsStrong />
      <IcoLinesStyle>
        <IcoStyle>
          <IcoSkillsSkill
            icon={<IoLogoJavascript />}
            text="JavaScript"
            bgColor="#F7DF1E"
            txtColor="black"
          />
          <IcoSkillsSkill
            icon={<IoLogoReact />}
            text="React"
            bgColor="#61DAFB"
            txtColor="black"
          />
        </IcoStyle>
        <IcoStyle>
          <IcoSkillsSkill
            icon={<SiNextdotjs />}
            text="Next.js"
            bgColor="#000000"
            txtColor="white"
          />
          <IcoSkillsSkill
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
