import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterIntroduce({
  isStrong,
}: {
  isStrong: boolean;
}) {
  return <BtnFooterStyle isStrong={isStrong}>INTRODUCE</BtnFooterStyle>;
}
