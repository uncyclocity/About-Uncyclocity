import { SiGithub, SiVimeo } from "react-icons/si";
import { RiRocket2Line } from "react-icons/ri";
import styled from "styled-components";
import IcoBadge from "../atoms/badge/IcoBadge";
import { useSampleState } from "../context/pageContext";

const LayoutStyle = styled.div`
  display: flex;
  width: 500px;
  margin: 20px 0;
  justify-content: space-between;
`;

const MobileLayoutStyle = styled.div`
  width: 225px;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MobileFloorStyle = styled.div`
  display: flex;
  margin: 0 auto;

  & > div {
    margin: 2.5px;
  }
`;

export default function ProfileLink({
  gotoGithub,
  gotoVelog,
  gotoRocketPunch,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
  gotoRocketPunch: () => void;
}) {
  const { mQuery } = useSampleState();

  if (mQuery) {
    return (
      <MobileLayoutStyle>
        <MobileFloorStyle>
          <IcoBadge
            icon={<SiGithub />}
            text="uncyclocity"
            bgColor="#404040"
            txtColor="white"
            onClick={gotoGithub}
          />
          <IcoBadge
            icon={<SiVimeo />}
            text="uncyclocity.log"
            bgColor="#20c997"
            txtColor="white"
            onClick={gotoVelog}
          />
        </MobileFloorStyle>
        <MobileFloorStyle>
          <IcoBadge
            icon={<RiRocket2Line />}
            text="로켓펀치/이성범"
            bgColor="#4e60ff"
            txtColor="white"
            onClick={gotoRocketPunch}
          />
        </MobileFloorStyle>
      </MobileLayoutStyle>
    );
  } else {
    return (
      <LayoutStyle>
        <IcoBadge
          icon={<SiGithub />}
          text="uncyclocity"
          bgColor="#404040"
          txtColor="white"
          onClick={gotoGithub}
        />
        <IcoBadge
          icon={<SiVimeo />}
          text="uncyclocity.log"
          bgColor="#20c997"
          txtColor="white"
          onClick={gotoVelog}
        />
        <IcoBadge
          icon={<RiRocket2Line />}
          text="로켓펀치/이성범"
          bgColor="#4e60ff"
          txtColor="white"
          onClick={gotoRocketPunch}
        />
      </LayoutStyle>
    );
  }
}
