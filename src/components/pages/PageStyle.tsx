import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PageStyle({ children }: { children: React.ReactNode }) {
  return <Styles>{children}</Styles>;
}
