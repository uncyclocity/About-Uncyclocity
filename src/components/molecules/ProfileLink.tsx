import { SiGithub, SiNotion, SiVimeo } from "react-icons/si";
import styled from "styled-components";
import BgeBadge from "../atoms/badge/BgeBadge";
import { useSampleState } from "../context/pageContext";

const LayoutStyle = styled.div`
  display: flex;
  width: 610px;
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
  gotoNotion,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
  gotoNotion: () => void;
}) {
  const { mQuery } = useSampleState();

  if (mQuery) {
    return (
      <MobileLayoutStyle>
        <MobileFloorStyle>
          <BgeBadge
            icon={<SiGithub />}
            text="uncyclocity"
            bgColor="#404040"
            txtColor="white"
            onClick={gotoGithub}
          />
          <BgeBadge
            icon={<SiVimeo />}
            text="uncyclocity.log"
            bgColor="#20c997"
            txtColor="white"
            onClick={gotoVelog}
          />
        </MobileFloorStyle>
        <MobileFloorStyle>
          <BgeBadge
            icon={<SiNotion />}
            text="이성범/내일이 더 발전된 개발자"
            bgColor="#000000"
            txtColor="white"
            onClick={gotoNotion}
          />
        </MobileFloorStyle>
      </MobileLayoutStyle>
    );
  } else {
    return (
      <LayoutStyle>
        <BgeBadge
          icon={<SiGithub />}
          text="uncyclocity"
          bgColor="#404040"
          txtColor="white"
          onClick={gotoGithub}
        />
        <BgeBadge
          icon={<SiVimeo />}
          text="uncyclocity.log"
          bgColor="#20c997"
          txtColor="white"
          onClick={gotoVelog}
        />
        <BgeBadge
          icon={<SiNotion />}
          text="이성범/내일이 더 발전된 개발자"
          bgColor="#000000"
          txtColor="white"
          onClick={gotoNotion}
        />
      </LayoutStyle>
    );
  }
}
