type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksForestiaScreenShot2() {
  const image: Image = {
    src: "/images/forestiaScreenShot2.png",
    alt: "Forestia_ScreenShot_2",
  };

  return <img src={image.src} alt={image.alt} />;
}
