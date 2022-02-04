import { SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import BgeBadge from "../atoms/badge/BgeBadge";
import TxtSkillsTitle from "../atoms/text/TxtSkillsTitle";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsBackEnd() {
  return (
    <LayoutStyle>
      <TxtSkillsTitle text="Back-End" />
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
