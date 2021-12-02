import React from "react";
import styled from "styled-components";
import img from "./IntroduceProfileCtnImg.png";

const Styles = styled.div`
  background-image: url("${img}");
  background-size: 220px;
  padding: 7px 15.5px;
  width: 220px;

  @media screen and (max-width: 700px) {
    margin: 0 auto;
    background-size: 170px;
    width: 170px;
  }
`;

export default function CtnIntroduceProfile({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Styles>{children}</Styles>;
}
