import React from "react";
import styled from "styled-components";
import { SlideUp } from "../../styles/keyframes/slide";

const Styles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: 0.3s ease-in-out 0s ${SlideUp};
  animation-fill-mode: forwards;
`;

export default function PageStyle({ children }: { children: React.ReactNode }) {
  return <Styles>{children}</Styles>;
}
