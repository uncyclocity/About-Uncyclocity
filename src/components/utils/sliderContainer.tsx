import styled from "styled-components";

const Styles = styled.div`
  display: flex;

  & > div {
    transition: all 0.3s ease-in-out;
    transform: ${({ slideNum }: { slideNum: number }) =>
      `translateX(-${slideNum * 100}%)`};
  }
`;

export default function SliderContainer({
  slideNum,
  slideNumSetter,
  children,
}: {
  slideNum: number;
  slideNumSetter: (num: number) => void;
  children: React.ReactNode;
}) {
  return (
    <Styles
      slideNum={slideNum}
      onClick={(e) => {
        e.preventDefault();
        console.log(e);
        slideNumSetter(slideNum + 1);
      }}
    >
      {children}
    </Styles>
  );
}
