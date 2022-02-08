type Image = {
  src: string;
  alt: string;
};

export default function ImgProfileImage() {
  const image: Image = {
    src: "/assets/images/profilePhoto.jpg",
    alt: "프로필 사진",
  };

  return <img src={image.src} alt={image.alt} />;
}
