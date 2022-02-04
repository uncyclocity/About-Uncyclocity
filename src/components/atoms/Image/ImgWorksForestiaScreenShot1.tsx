type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksForestiaScreenShot1() {
  const image: Image = {
    src: "/images/forestiaScreenShot1.png",
    alt: "Forestia_ScreenShot_1",
  };

  return <img src={image.src} alt={image.alt} />;
}
