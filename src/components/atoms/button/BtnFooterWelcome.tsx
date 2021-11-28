import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterWelcome({ isStrong }: { isStrong: number }) {
  return (
    <BtnFooterStyle isStrong={isStrong} pageNum={0}>
      WELCOME
    </BtnFooterStyle>
  );
}
