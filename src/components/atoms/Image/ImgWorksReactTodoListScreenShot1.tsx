type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksReactTodoListScreenShot1() {
  const image: Image = {
    src: "/assets/images/reactTodoListScreenShot1.png",
    alt: "React-TodoList_ScreenShot_1",
  };

  return <img src={image.src} alt={image.alt} />;
}
