import BtnFooterStyle from "./BtnFooterStyle";

export default function BtnFooterSkills({ isStrong }: { isStrong: number }) {
  return (
    <BtnFooterStyle isStrong={isStrong} pageNum={3}>
      SKILLS
    </BtnFooterStyle>
  );
}
