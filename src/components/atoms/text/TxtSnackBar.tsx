import styled from "styled-components";

const Styles = styled.div`
  color: white;
  font-size: 17px;
`;

export default function TxtSnackBar({ text }: { text: string }) {
  return <Styles>{text}</Styles>;
}
