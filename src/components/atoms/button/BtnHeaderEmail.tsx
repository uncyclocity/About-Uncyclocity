import { AiTwotoneMail } from "react-icons/ai";
import BtnHeaderStyle from "./BtnHeaderStyle";

export default function BtnHeaderEmail({
  setHeaderHover,
  onClick,
}: {
  setHeaderHover: (key: string, value: boolean) => void;
  onClick: () => void;
}) {
  const btnKind = "email";

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
      <AiTwotoneMail />
    </BtnHeaderStyle>
  );
}
