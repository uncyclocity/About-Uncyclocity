import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterWelcome({
  nowSlide,
  onClick,
}: {
  nowSlide: number;
  onClick: (slideNum: number) => void;
}) {
  const pageNum = 0;

  return (
    <BtnFooterStyle
      nowSlide={nowSlide}
      pageNum={pageNum}
      onClick={() => pageNum !== nowSlide && onClick(pageNum)}
    >
      WELCOME
    </BtnFooterStyle>
  );
}
