import { IoIosCall } from "react-icons/io";
import BtnHeaderStyle from "./BtnHeaderStyle";

export default function BtnHeaderCall({
  setHeaderHover,
  onClick,
}: {
  setHeaderHover: (key: string, value: boolean) => void;
  onClick: () => void;
}) {
  const btnKind = "call";

  return (
    <BtnHeaderStyle
      onMouseEnter={() => setHeaderHover(btnKind, true)}
      onMouseLeave={() => setHeaderHover(btnKind, false)}
      onClick={onClick}
    >
      <IoIosCall />
    </BtnHeaderStyle>
  );
}
