import ProfileInfos from "../organisms/ProfileInfos";

export default function TmplProfile({
  gotoGithub,
  gotoVelog,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
}) {
  return <ProfileInfos gotoGithub={gotoGithub} gotoVelog={gotoVelog} />;
}
