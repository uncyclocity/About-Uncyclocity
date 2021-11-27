import styled from "styled-components";
import { FadeIn } from "../../../styles/keyframes/fade";

type Image = {
  src: string;
  alt: string;
  width: number;
  height?: number;
};

const Styles = styled.div`
  opacity: 0;
  animation: 0.5s ease-in-out 1.5s ${FadeIn};
  animation-fill-mode: forwards;
`;

export default function ImgProfileImage() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/913400010849267733/F10D031A-6EBF-440D-ACE7-C54A53E19F9F.jpg",
    width: 100,
    alt: "프로필 사진",
  };

  return (
    <Styles>
      <img src={image.src} width={image.width} alt={image.alt} />
    </Styles>
  );
}
