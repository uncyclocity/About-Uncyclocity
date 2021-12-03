import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  border-radius: 15px;
  background: white;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1), 0 1px 30px 0 rgba(0, 0, 0, 0.06);
`;

export default function CtnWorks({ children }: { children: React.ReactNode }) {
  return <Styles>{children}</Styles>;
}
