import { IoIosCall } from "react-icons/io";
import BtnHeaderStyle from "./BtnHeaderStyle";

export default function BtnHeaderCall({
  setHeaderHover,
}: {
  setHeaderHover: (key: string, value: boolean) => void;
}) {
  const btnKind = "call";

  return (
    <BtnHeaderStyle
      onMouseEnter={() => setHeaderHover(btnKind, true)}
      onMouseLeave={() => setHeaderHover(btnKind, false)}
    >
      <IoIosCall />
    </BtnHeaderStyle>
  );
}
