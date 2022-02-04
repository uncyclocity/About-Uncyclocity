import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { SlideUp, SlideDown } from "../../../styles/keyframes/slide";

const Styles = styled.div`
  background: #363636;
  border-radius: 5px;
  padding: 10px;
  opacity: 0.5;
  position: absolute;
  bottom: 100px;
  animation: 0.25s ease-in-out 0s ${SlideUp};
  ${({ leave }: { leave: boolean }) =>
    leave &&
    css`
      animation-name: ${SlideDown};
    `}
  animation-fill-mode: forwards;
`;

export default function CtnSnackBar({
  children,
  text,
}: {
  children: React.ReactNode;
  text: String;
}) {
  const [leave, setLeave] = useState<boolean>(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setLeave(true);
    }, 2000);
  }, [text]);

  return <Styles leave={leave}>{children}</Styles>;
}
