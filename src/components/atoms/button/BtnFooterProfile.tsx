import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterProfile({
  nowSlide,
  onClick,
}: {
  nowSlide: number;
  onClick: (slideNum: number) => void;
}) {
  const pageNum = 1;

  return (
    <BtnFooterStyle
      nowSlide={nowSlide}
      pageNum={pageNum}
      onClick={() => pageNum !== nowSlide && onClick(pageNum)}
    >
      PROFILE
    </BtnFooterStyle>
  );
}
