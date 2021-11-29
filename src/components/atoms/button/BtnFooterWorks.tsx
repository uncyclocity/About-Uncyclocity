import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterWorks({
  nowSlide,
  onClick,
}: {
  nowSlide: number;
  onClick: (slideNum: number) => void;
}) {
  const pageNum = 4;

  return (
    <BtnFooterStyle
      nowSlide={nowSlide}
      pageNum={pageNum}
      onClick={() => pageNum !== nowSlide && onClick(pageNum)}
    >
      WORKS
    </BtnFooterStyle>
  );
}
