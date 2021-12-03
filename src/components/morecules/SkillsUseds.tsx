import { SiAndroidstudio, SiFirebase, SiMysql } from "react-icons/si";
import IcoSkillsSkill from "../atoms/icon/IcoSkillsSkill";
import TxtSkillsUsed from "../atoms/text/TxtSkillsUsed";
import { IcoLinesStyle, IcoStyle, LayoutStyle } from "./SkillsStyle";

export default function SkillsUseds() {
  return (
    <LayoutStyle>
      <TxtSkillsUsed />
      <IcoLinesStyle>
        <IcoStyle>
          <IcoSkillsSkill
            icon={<SiAndroidstudio />}
            text="Android Studio"
            bgColor="#3DDC84"
            txtColor="black"
          />
          <IcoSkillsSkill
            icon={<SiFirebase />}
            text="Firebase"
            bgColor="#FFCA28"
            txtColor="black"
          />
        </IcoStyle>
        <IcoStyle>
          <IcoSkillsSkill
            icon={<SiMysql />}
            text="MySQL"
            bgColor="#4479A1"
            txtColor="white"
          />
        </IcoStyle>
      </IcoLinesStyle>
    </LayoutStyle>
  );
}
