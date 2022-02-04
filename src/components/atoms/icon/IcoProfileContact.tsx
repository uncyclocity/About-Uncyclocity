import styled from "styled-components";

const IconBgStyle = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background: #404040;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 37px;
    height: 37px;
  }
`;

const IconStyle = styled.div`
  font-size: 30px;
  color: white;
  height: 30px;

  & {
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    font-size: 20px;
    height: 23px;
  }
`;

export default function IcoProfileContact({ icon }: { icon: JSX.Element }) {
  return (
    <IconBgStyle>
      <IconStyle>{icon}</IconStyle>
    </IconBgStyle>
  );
}
