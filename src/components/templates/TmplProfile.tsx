import ProfileInfos from "../organisms/ProfileInfos";

export default function TmplProfile({
  gotoGithub,
  gotoVelog,
  gotoNotion,
}: {
  gotoGithub: () => void;
  gotoVelog: () => void;
  gotoNotion: () => void;
}) {
  return (
    <ProfileInfos
      gotoGithub={gotoGithub}
      gotoVelog={gotoVelog}
      gotoNotion={gotoNotion}
    />
  );
}
