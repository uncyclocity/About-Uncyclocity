import styled from "styled-components";

const Styles = styled.div`
  font-size: 18px;
  color: #808080;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export default function TxtWelcomeScrollHint() {
  if (matchMedia("screen and (max-width: 700px)").matches) {
    return <Styles>아래 버튼으로 페이지를 넘겨 보세요 ;)</Styles>;
  } else {
    return <Styles>스크롤을 통해 페이지를 넘겨 보세요 ;)</Styles>;
  }
}
