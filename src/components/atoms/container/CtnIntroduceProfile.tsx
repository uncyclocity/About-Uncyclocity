import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  background-image: url("/assets/images/IntroduceProfileCtnImg.png");
  background-size: 220px;
  background-repeat: no-repeat;
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
