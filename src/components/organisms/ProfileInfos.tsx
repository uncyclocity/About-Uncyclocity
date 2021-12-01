import styled from "styled-components";
import ProfileContact from "../morecules/ProfileContact";
import ProfileInfo from "../morecules/ProfileInfo";
import ProfileLink from "../morecules/ProfileLink";
import ProfilePhotoAndName from "../morecules/ProfilePhotoAndName";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const InfosStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  width: 700px;

  @media screen and (max-width: 700px) {
    align-items: center;
    margin-left: 0px;
  }
`;

export default function ProfileInfos({
  gotoGithub,
  gotoVelog,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
}) {
  return (
    <LayoutStyle>
      <ProfilePhotoAndName />
      <InfosStyle>
        <ProfileInfo />
        <ProfileContact />
        <ProfileLink gotoGithub={gotoGithub} gotoVelog={gotoVelog} />
      </InfosStyle>
    </LayoutStyle>
  );
}
