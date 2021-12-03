import {
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import IcoSkillsSkill from "../atoms/icon/IcoSkillsSkill";
import TxtSkillsUsing from "../atoms/text/TxtSkillsUsing";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsUsings() {
  return (
    <LayoutStyle>
      <TxtSkillsUsing />
      <IcoLinesStyle>
        <IcoStyle>
          <IcoSkillsSkill
            icon={<SiTypescript />}
            text="TypeScript"
            bgColor="#3178C6"
            txtColor="white"
          />
          <IcoSkillsSkill
            icon={<SiNodedotjs />}
            text="Node.js"
            bgColor="#339933"
            txtColor="white"
          />
        </IcoStyle>
        <IcoStyle>
          <IcoSkillsSkill
            icon={<SiExpress />}
            text="Express"
            bgColor="#000000"
            txtColor="white"
          />
          <IcoSkillsSkill
            icon={<SiMongodb />}
            text="MongoDB"
            bgColor="#47A248"
            txtColor="white"
          />
        </IcoStyle>
      </IcoLinesStyle>
    </LayoutStyle>
  );
}
