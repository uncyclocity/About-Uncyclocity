import { keyframes } from "styled-components";

export const SlideUp = keyframes`
  from { 
    transform: translateY(5px);
    opacity: 0;
  }
  to { 
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const SlideDown = keyframes`
  from { 
    transform: translateY(0px);
    opacity: 1;
  }
  to { 
    transform: translateY(5px);
    opacity: 0;
  }
`;
