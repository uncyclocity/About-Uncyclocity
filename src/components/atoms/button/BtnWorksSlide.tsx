import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-size: 20px;
  text-align: center;
  width: 7vw;
  cursor: pointer;
`;

export default function BtnWorksSlide({
  icon,
  slideNumSetter,
  slideNum,
}: {
  icon: React.ReactNode;
  slideNumSetter: (num: number) => void;
  slideNum: number;
}) {
  return <Styles onClick={() => slideNumSetter(slideNum)}>{icon}</Styles>;
}
