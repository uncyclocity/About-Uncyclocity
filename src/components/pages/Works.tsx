import TmplWorks from "../templates/TmplWorks";
import PageStyle from "./PageStyle";

export default function Works() {
  const gitHubLinkForestia: GitHubLink = {
    gotoFrontRepo: () => {
      const githubUrl = "https://github.com/uncyclocity/Forestia-Front";
      window.open(githubUrl, "_blank");
    },
    gotoBackRepo: () => {
      const githubUrl = "https://github.com/uncyclocity/Forestia-Back";
      window.open(githubUrl, "_blank");
    },
  };

  const gitHubLinkReactTodoList: GitHubLink = {
    gotoFrontRepo: () => {
      const githubUrl = "https://github.com/uncyclocity/React-TodoList-Front";
      window.open(githubUrl, "_blank");
    },
    gotoBackRepo: () => {
      const githubUrl = "https://github.com/uncyclocity/React-TodoList-Back";
      window.open(githubUrl, "_blank");
    },
  };

  return (
    <PageStyle>
      <TmplWorks
        gitHubLinkForestia={gitHubLinkForestia}
        gitHubLinkReactTodoList={gitHubLinkReactTodoList}
      />
    </PageStyle>
  );
}
