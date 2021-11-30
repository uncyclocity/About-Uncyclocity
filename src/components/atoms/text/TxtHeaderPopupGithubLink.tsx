import {
  TxtHeaderPopupHintStyle,
  TxtHeaderPopupStyle,
} from "./TxtHeaderPopupStyle";

export default function TxtHeaderPopupGithubLink() {
  return (
    <TxtHeaderPopupStyle>
      Github @uncyclocity
      <TxtHeaderPopupHintStyle>클릭하면 이동합니다.</TxtHeaderPopupHintStyle>
    </TxtHeaderPopupStyle>
  );
}
