import { BsGithub } from "react-icons/bs";
import BtnHeaderStyle from "./BtnHeaderStyle";

export default function BtnHeaderGitHub({
  setHeaderHover,
  onClick,
}: {
  setHeaderHover: (key: string, value: boolean) => void;
  onClick: () => void;
}) {
  const btnKind = "githubLink";

  return (
    <BtnHeaderStyle
      onMouseEnter={() =>
        !matchMedia("screen and (max-width: 700px)").matches &&
        setHeaderHover(btnKind, true)
      }
      onMouseLeave={() =>
        !matchMedia("screen and (max-width: 700px)").matches &&
        setHeaderHover(btnKind, false)
      }
      onClick={onClick}
    >
      <BsGithub />
    </BtnHeaderStyle>
  );
}
