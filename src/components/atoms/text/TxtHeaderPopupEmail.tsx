import {
  TxtHeaderPopupHintStyle,
  TxtHeaderPopupStyle,
} from "./TxtHeaderPopupStyle";

export default function TxtHeaderPopupEmail() {
  return (
    <TxtHeaderPopupStyle>
      seongbeom_lee@kakao.com
      <TxtHeaderPopupHintStyle>복사하려면 클릭하세요</TxtHeaderPopupHintStyle>
    </TxtHeaderPopupStyle>
  );
}
