import styled from "styled-components";
import FooterBtns from "../organisms/FooterBtns";

const Styles = styled.div`
  width: 100%;
  height: 120px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function TmplFooter({ isStrong }: { isStrong: number }) {
  return (
    <Styles>
      <FooterBtns isStrong={isStrong} />
    </Styles>
  );
}
