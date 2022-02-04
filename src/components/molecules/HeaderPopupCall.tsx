import CtnHoverPopup from "../atoms/container/CtnHoverPopup";
import TxtHeaderPopup from "../atoms/text/TxtHeaderPopup";

export default function HeaderPopupCall() {
  return (
    <CtnHoverPopup>
      <TxtHeaderPopup main="+82 10-2610-3861" sub="복사하려면 클릭하세요" />
    </CtnHoverPopup>
  );
}
