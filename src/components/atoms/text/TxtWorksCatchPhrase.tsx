import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-family: NanumSquareB;
  text-align: center;
  font-size: 16px;
`;

export default function TxtWorksCatchPhrase({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styles>{children}</Styles>;
}
