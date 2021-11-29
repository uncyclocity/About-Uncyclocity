import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterIntroduce({
  nowSlide,
  onClick,
}: {
  nowSlide: number;
  onClick: (slideNum: number) => void;
}) {
  const pageNum = 2;

  return (
    <BtnFooterStyle
      nowSlide={nowSlide}
      pageNum={pageNum}
      onClick={() => pageNum !== nowSlide && onClick(pageNum)}
    >
      INTRODUCE
    </BtnFooterStyle>
  );
}
