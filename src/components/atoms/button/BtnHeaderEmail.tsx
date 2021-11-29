import { AiTwotoneMail } from "react-icons/ai";
import BtnHeaderStyle from "./BtnHeaderStyle";

export default function BtnHeaderEmail({
  setHeaderHover,
}: {
  setHeaderHover: (key: string, value: boolean) => void;
}) {
  const btnKind = "email";

  return (
    <BtnHeaderStyle
      onMouseEnter={() => setHeaderHover(btnKind, true)}
      onMouseLeave={() => setHeaderHover(btnKind, false)}
    >
      <AiTwotoneMail />
    </BtnHeaderStyle>
  );
}
