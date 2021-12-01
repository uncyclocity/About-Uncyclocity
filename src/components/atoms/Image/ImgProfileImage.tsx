type Image = {
  src: string;
  alt: string;
};

export default function ImgProfileImage() {
  const image: Image = {
    src: "https://media.discordapp.net/attachments/820998088889073685/913400010849267733/F10D031A-6EBF-440D-ACE7-C54A53E19F9F.jpg",
    alt: "프로필 사진",
  };

  return <img src={image.src} alt={image.alt} />;
}
