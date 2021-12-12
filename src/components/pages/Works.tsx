import TmplWorks from "../templates/TmplWorks";
import PageStyle from "./PageStyle";

export default function Works() {
  const forestiaLinks: WorkLinks = {
    gotoFrontRepo: () => {
      const githubUrl = "https://github.com/uncyclocity/Forestia-Front";
      window.open(githubUrl, "_blank");
    },
    gotoBackRepo: () => {
      const githubUrl = "https://github.com/uncyclocity/Forestia-Back";
      window.open(githubUrl, "_blank");
    },
    gotoWorkLink: () => {
      const workUrl = "https://forestia.vercel.app";
      window.open(workUrl, "_blank");
    },
  };

  const reactTodoListLinks: WorkLinks = {
    gotoFrontRepo: () => {
      const githubUrl = "https://github.com/uncyclocity/React-TodoList-Front";
      window.open(githubUrl, "_blank");
    },
    gotoBackRepo: () => {
      const githubUrl = "https://github.com/uncyclocity/React-TodoList-Back";
      window.open(githubUrl, "_blank");
    },
    gotoWorkLink: () => {
      const workUrl = "https://react-todo-list-lyart-tau.vercel.app/";
      window.open(workUrl, "_blank");
    },
  };

  return (
    <PageStyle>
      <TmplWorks
        forestiaLinks={forestiaLinks}
        reactTodoListLinks={reactTodoListLinks}
      />
    </PageStyle>
  );
}
