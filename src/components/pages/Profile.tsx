import TmplProfile from "../templates/TmplProfile";
import PageStyle from "./PageStyle";

export default function Profile() {
  const githubUrl = "https://github.com/uncyclocity";
  const velogUrl = "https://velog.io/@uncyclocity";
  const notionUrl =
    "https://axiomatic-booth-a1e.notion.site/fb3fe5045cdc4b10bf37c47df21394bc";

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
