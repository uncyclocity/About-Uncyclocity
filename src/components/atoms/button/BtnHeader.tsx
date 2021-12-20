import React from "react";
import styled from "styled-components";
import { useSampleState } from "../../context/pageContext";

const Styles = styled.div`
  font-size: 25px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }

  &:hover {
    transition: 0.2s all ease-in-out;
    color: #4b4b4b;
  }

  &:not(:hover) {
    transition: 0.2s all ease-in-out;
    color: #808080;
  }
`;

export default function BtnHeader({
  setHeaderHover,
  onClick,
  btnKind,
  icon,
}: {
  setHeaderHover: (key: string, value: boolean) => void;
  onClick: () => void;
  btnKind: string;
  icon: React.ReactNode;
}) {
  const { mQuery } = useSampleState();

  return (
    <Styles
      onMouseEnter={() => !mQuery && setHeaderHover(btnKind, true)}
      onMouseLeave={() => !mQuery && setHeaderHover(btnKind, false)}
      onClick={onClick}
    >
      {icon}
    </Styles>
  );
}
