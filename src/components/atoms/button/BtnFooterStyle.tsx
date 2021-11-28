import styled from "styled-components";

const BtnFooterStyle = styled.div`
  font-size: 16px;
  text-align: center;
  letter-spacing: 4px;
  cursor: pointer;

  font-family: ${({
    isStrong,
    pageNum,
  }: {
    isStrong: number;
    pageNum: number;
  }): string => {
    return isStrong === pageNum ? "NanumSquareB" : "NanumSquareL";
  }};
`;

export default BtnFooterStyle;
