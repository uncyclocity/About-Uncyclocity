import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterIntroduce({ isStrong }: { isStrong: number }) {
  return (
    <BtnFooterStyle isStrong={isStrong} pageNum={2}>
      INTRODUCE
    </BtnFooterStyle>
  );
}
