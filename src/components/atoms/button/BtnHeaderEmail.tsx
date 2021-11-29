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
      onMouseEnter={() => setHeaderHover(btnKind, true)}
      onMouseLeave={() => setHeaderHover(btnKind, false)}
      onClick={onClick}
    >
      <AiTwotoneMail />
    </BtnHeaderStyle>
  );
}
