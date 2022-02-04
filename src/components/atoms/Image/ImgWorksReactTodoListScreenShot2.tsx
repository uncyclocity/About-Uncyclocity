type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksReactTodoListScreenShot2() {
  const image: Image = {
    src: "/images/reactTodoListScreenShot2.png",
    alt: "React-TodoList_ScreenShot_2",
  };

  return <img src={image.src} alt={image.alt} />;
}
