type Image = {
  src: string;
  alt: string;
};

export default function ImgWorksReactTodoListLogo() {
  const image: Image = {
    src: "/images/reactTodoListLogo.png",
    alt: "React-TodoList_Logo",
  };

  return <img src={image.src} alt={image.alt} />;
}
