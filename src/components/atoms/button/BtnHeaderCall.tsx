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
      <IoIosCall />
    </BtnHeaderStyle>
  );
}
