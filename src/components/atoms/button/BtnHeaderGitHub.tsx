import { BsGithub } from "react-icons/bs";
import BtnHeaderStyle from "./BtnHeaderStyle";

export default function BtnHeaderGitHub({
  setHeaderHover,
}: {
  setHeaderHover: (key: string, value: boolean) => void;
}) {
  const btnKind = "githubLink";

  return (
    <BtnHeaderStyle
      onMouseEnter={() => setHeaderHover(btnKind, true)}
      onMouseLeave={() => setHeaderHover(btnKind, false)}
    >
      <BsGithub />
    </BtnHeaderStyle>
  );
}
