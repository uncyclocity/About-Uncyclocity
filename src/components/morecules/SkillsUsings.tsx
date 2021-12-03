import {
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import IcoBadge from "../atoms/icon/IcoBadge";
import TxtSkillsUsing from "../atoms/text/TxtSkillsUsing";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsUsings() {
  return (
    <LayoutStyle>
      <TxtSkillsUsing />
      <IcoLinesStyle>
        <IcoStyle>
          <IcoBadge
            icon={<SiTypescript />}
            text="TypeScript"
            bgColor="#3178C6"
            txtColor="white"
          />
          <IcoBadge
            icon={<SiNodedotjs />}
            text="Node.js"
            bgColor="#339933"
            txtColor="white"
          />
        </IcoStyle>
        <IcoStyle>
          <IcoBadge
            icon={<SiExpress />}
            text="Express"
            bgColor="#000000"
            txtColor="white"
          />
          <IcoBadge
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
