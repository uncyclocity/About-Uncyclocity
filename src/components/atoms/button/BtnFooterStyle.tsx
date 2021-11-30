import styled from "styled-components";

const BtnFooterStyle = styled.div`
  font-size: 17px;
  text-align: center;
  letter-spacing: 5px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    letter-spacing: 2px;
  }

  font-family: ${({
    nowSlide,
    pageNum,
  }: {
    nowSlide: number;
    pageNum: number;
  }): string => {
    return nowSlide === pageNum ? "NanumSquareB" : "NanumSquareL";
  }};
`;

export default BtnFooterStyle;
