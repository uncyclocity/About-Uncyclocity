import TmplProfile from "../templates/TmplProfile";
import PageStyle from "./PageStyle";

export default function Profile() {
  const githubUrl = "https://github.com/uncyclocity";
  const velogUrl = "https://velog.io/@uncyclocity";
  const notionUrl = "https://resume.uncyclocity.tech";

  const gotoSite: (url: string) => void = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <PageStyle>
      <TmplProfile
        gotoGithub={() => gotoSite(githubUrl)}
        gotoVelog={() => gotoSite(velogUrl)}
        gotoNotion={() => gotoSite(notionUrl)}
      />
    </PageStyle>
  );
}
