import CtnHoverPopup from "../atoms/container/CtnHoverPopup";
import TxtHeaderPopup from "../atoms/text/TxtHeaderPopup";

export default function HeaderPopupEmail() {
  return (
    <CtnHoverPopup>
      <TxtHeaderPopup
        main="seongbeom_lee@kakao.com"
        sub="복사하려면 클릭하세요"
      />
    </CtnHoverPopup>
  );
}
