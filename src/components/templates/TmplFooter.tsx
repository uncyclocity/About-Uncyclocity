import styled from "styled-components";
import FooterBtns from "../organisms/FooterBtns";

const Styles = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default function TmplFooter({
  nowSlide,
  onClick,
}: {
  nowSlide: number;
  onClick: (slideNum: number) => void;
}) {
  return (
    <Styles>
      <FooterBtns nowSlide={nowSlide} onClick={onClick} />
    </Styles>
  );
}
