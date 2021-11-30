import styled from "styled-components";
import BtnFooterIntroduce from "../atoms/button/BtnFooterIntroduce";
import BtnFooterProfile from "../atoms/button/BtnFooterProfile";
import BtnFooterSkills from "../atoms/button/BtnFooterSkills";
import BtnFooterWelcome from "../atoms/button/BtnFooterWelcome";
import BtnFooterWorks from "../atoms/button/BtnFooterWorks";

const Styles = styled.div`
  display: flex;
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
      <BtnFooterWelcome nowSlide={nowSlide} onClick={onClick} />
      <BtnFooterProfile nowSlide={nowSlide} onClick={onClick} />
      <BtnFooterIntroduce nowSlide={nowSlide} onClick={onClick} />
      <BtnFooterSkills nowSlide={nowSlide} onClick={onClick} />
      <BtnFooterWorks nowSlide={nowSlide} onClick={onClick} />
    </Styles>
  );
}
