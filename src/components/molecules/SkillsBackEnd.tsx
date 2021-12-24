import { SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import BgeBadge from "../atoms/badge/BgeBadge";
import TxtSkillsBackEnd from "../atoms/text/TxtSkillsBackEnd";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsBackEnd() {
  return (
    <LayoutStyle>
      <TxtSkillsBackEnd />
      <IcoLinesStyle>
        <IcoStyle>
          <BgeBadge
            icon={<SiNodedotjs />}
            text="Node.js"
            bgColor="#339933"
            txtColor="white"
          />
          <BgeBadge
            icon={<SiExpress />}
            text="Express"
            bgColor="#000000"
            txtColor="white"
          />
        </IcoStyle>
        <IcoStyle>
          <BgeBadge
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
