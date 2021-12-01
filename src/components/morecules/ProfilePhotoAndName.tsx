import styled from "styled-components";
import ImgProfileImage from "../atoms/Image/ImgProfileImage";
import TxtProfileNameAndNickname from "../atoms/text/TxtProfileNameAndNickname";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-right: 20px;

  border-right: 1px solid #b0b0b0;

  img {
    width: 180px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: row;
    border-right: 0px;
    padding-right: 0px;
    margin-bottom: 10px;

    img {
      width: 80px;
    }
  }
`;

export default function ProfilePhotoAndName() {
  return (
    <Styles>
      <ImgProfileImage />
      <TxtProfileNameAndNickname />
    </Styles>
  );
}
