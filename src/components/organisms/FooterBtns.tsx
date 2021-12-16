import styled from "styled-components";
import BtnFooter from "../atoms/button/BtnFooter";

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 620px;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default function FooterBtns({
  nowSlide,
  onClick,
}: {
  nowSlide: number;
  onClick: (slideNum: number) => void;
}) {
  return (
    <Styles>
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={0}
        onClick={onClick}
        text="WELCOME"
      />
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={1}
        onClick={onClick}
        text="PROFILE"
      />
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={2}
        onClick={onClick}
        text="INTRODUCE"
      />
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={3}
        onClick={onClick}
        text="SKILLS"
      />
      <BtnFooter
        nowSlide={nowSlide}
        pageNum={4}
        onClick={onClick}
        text="WORKS"
      />
    </Styles>
  );
}
