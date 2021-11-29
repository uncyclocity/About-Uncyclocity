import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterSkills({
  nowSlide,
  onClick,
}: {
  nowSlide: number;
  onClick: (slideNum: number) => void;
}) {
  const pageNum = 3;

  return (
    <BtnFooterStyle
      nowSlide={nowSlide}
      pageNum={pageNum}
      onClick={() => pageNum !== nowSlide && onClick(pageNum)}
    >
      SKILLS
    </BtnFooterStyle>
  );
}
