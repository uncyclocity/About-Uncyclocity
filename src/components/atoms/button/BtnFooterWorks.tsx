import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterWorks({ isStrong }: { isStrong: number }) {
  return (
    <BtnFooterStyle isStrong={isStrong} pageNum={4}>
      WORKS
    </BtnFooterStyle>
  );
}
