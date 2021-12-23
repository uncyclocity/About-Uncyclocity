import { SiAmazons3, SiDocker, SiOracle } from "react-icons/si";
import IcoBadge from "../atoms/badge/IcoBadge";
import TxtSkillsDevOps from "../atoms/text/TxtSkillsDevOps";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsDevOps() {
  return (
    <LayoutStyle>
      <TxtSkillsDevOps />
      <IcoLinesStyle>
        <IcoStyle>
          <IcoBadge
            icon={<SiDocker />}
            text="Docker"
            bgColor="#2496ED"
            txtColor="white"
          />
          <IcoBadge
            icon={<SiAmazons3 />}
            text="Amazon S3"
            bgColor="#569A31"
            txtColor="white"
          />
        </IcoStyle>
        <IcoStyle>
          <IcoBadge
            icon={<SiOracle />}
            text="Oracle Cloud"
            bgColor="#F80000"
            txtColor="white"
          />
        </IcoStyle>
      </IcoLinesStyle>
    </LayoutStyle>
  );
}
