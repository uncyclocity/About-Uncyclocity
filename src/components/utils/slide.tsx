import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  width: 100vw;
`;

export default function Slide({ children }: { children: React.ReactNode }) {
  return <Styles>{children}</Styles>;
}
