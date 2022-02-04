import CtnHoverPopup from "../atoms/container/CtnHoverPopup";
import TxtHeaderPopup from "../atoms/text/TxtHeaderPopup";

export default function HeaderPopupGithubLink() {
  return (
    <CtnHoverPopup>
      <TxtHeaderPopup main="@uncyclocity" sub="클릭하면 이동합니다" />
    </CtnHoverPopup>
  );
}
