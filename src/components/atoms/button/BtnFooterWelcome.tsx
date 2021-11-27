import styled from "styled-components";

const Styles = styled.div`
  font-size: 18px;
  text-align: center;
  letter-spacing: 4px;
  font-family: ${({ isStrong }: { isStrong: boolean }): string => {
    return isStrong ? "NanumSquareB" : "NanumSquareL";
  }};
`;

export default function BtnFooterWelcome({ isStrong }: { isStrong: boolean }) {
  return <Styles isStrong={isStrong}>WELCOME</Styles>;
}
