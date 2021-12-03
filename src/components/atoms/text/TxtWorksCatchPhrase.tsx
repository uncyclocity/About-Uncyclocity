import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-family: NanumSquareB;
  text-align: center;
`;

export default function TxtWorksCatchPhrase({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styles>{children}</Styles>;
}
