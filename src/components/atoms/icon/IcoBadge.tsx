import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div<{ bgColor: string; txtColor: string }>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  background: ${(props: any) => props.bgColor};
  color: ${(props: any) => props.txtColor};
  height: 35px;

  @media screen and (max-width: 700px) {
    padding: 4px 5px;
    border-radius: 3px;
    height: 24px;
  }
`;

const IconStyle = styled.div`
  font-size: 25px;
  height: 25px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
    height: 15px;
  }
`;

const TextStyle = styled.div`
  font-size: 17px;
  margin-left: 10px;
  font-family: NanumSquareB;

  @media screen and (max-width: 700px) {
    font-size: 13px;
    margin-left: 5px;
  }
`;

export default function IcoBadge({
  icon,
  text,
  bgColor,
  txtColor,
}: {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  txtColor: string;
}) {
  return (
    <LayoutStyle bgColor={bgColor} txtColor={txtColor}>
      <IconStyle>{icon}</IconStyle>
      <TextStyle>{text}</TextStyle>
    </LayoutStyle>
  );
}
