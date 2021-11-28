import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterProfile({ isStrong }: { isStrong: number }) {
  return (
    <BtnFooterStyle isStrong={isStrong} pageNum={1}>
      PROFILE
    </BtnFooterStyle>
  );
}
