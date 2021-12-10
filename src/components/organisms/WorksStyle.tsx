import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  width: 550px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 15px 0;
  }
  @media screen and (max-width: 700px) {
    width: 95vw;
    height: 78vh;
    & > div {
      margin: 10px 0;
    }
  }
`;

export default function WorksStyle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styles>{children}</Styles>;
}
