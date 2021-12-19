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
    margin: 11px 0;
  }
  @media screen and (max-width: 700px) {
    width: 80vw;
    height: 75vh;
    margin: 1.5vh 0;
  }
`;

export default function WorksStyle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styles>{children}</Styles>;
}
