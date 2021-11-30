import styled from "styled-components";
import { FadeIn } from "../../../styles/keyframes/fade";

type Image = {
  src: string;
  alt: string;
};

const Styles = styled.div`
  opacity: 0;
  animation: 1s ease-in-out 0s ${FadeIn};
  animation-fill-mode: forwards;
  img {
    width: 100px;
  }

  @media screen and (max-width: 700px) {
    img {
      width: 60px;
    }
  }
`;

export default function ImgProfileImage() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/913400010849267733/F10D031A-6EBF-440D-ACE7-C54A53E19F9F.jpg",
    alt: "프로필 사진",
  };

  return (
    <Styles>
      <img src={image.src} alt={image.alt} />
    </Styles>
  );
}
