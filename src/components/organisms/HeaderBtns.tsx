import styled from "styled-components";
import BtnHeaderCall from "../atoms/button/BtnHeaderCall";
import BtnHeaderEmail from "../atoms/button/BtnHeaderEmail";
import BtnHeaderGitHub from "../atoms/button/BtnHeaderGitHub";
import HeaderPopupCall from "../morecules/HeaderPopupCall";
import HeaderPopupEmail from "../morecules/HeaderPopupEmail";
import HeaderPopupGithubLink from "../morecules/HeaderPopupGithubLink";

const LayoutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 120px;

  @media screen and (max-width: 700px) {
    width: 90px;
  }
`;

const BtnsStyle = styled.div``;

export default function HeaderBtns({
  headerHover,
  setHeaderHover,
  headerClick,
  headerClickMobile,
}: {
  headerHover: HeaderHover;
  setHeaderHover: (key: string, value: boolean) => void;
  headerClick: HeaderClick;
  headerClickMobile: HeaderClick;
}) {
  return (
    <LayoutStyle>
      <BtnsStyle>
        {matchMedia("screen and (max-width: 700px)").matches ? (
          <BtnHeaderGitHub
            setHeaderHover={setHeaderHover}
            onClick={headerClickMobile.githubLink}
          />
        ) : (
          <BtnHeaderGitHub
            setHeaderHover={setHeaderHover}
            onClick={headerClick.githubLink}
          />
        )}
        {headerHover.githubLink && <HeaderPopupGithubLink />}
      </BtnsStyle>
      <BtnsStyle>
        {matchMedia("screen and (max-width: 700px)").matches ? (
          <BtnHeaderCall
            setHeaderHover={setHeaderHover}
            onClick={headerClickMobile.call}
          />
        ) : (
          <BtnHeaderCall
            setHeaderHover={setHeaderHover}
            onClick={headerClick.call}
          />
        )}
        {headerHover.call && <HeaderPopupCall />}
      </BtnsStyle>
      <BtnsStyle>
        {matchMedia("screen and (max-width: 700px)").matches ? (
          <BtnHeaderEmail
            setHeaderHover={setHeaderHover}
            onClick={headerClickMobile.email}
          />
        ) : (
          <BtnHeaderEmail
            setHeaderHover={setHeaderHover}
            onClick={headerClick.email}
          />
        )}
        {headerHover.email && <HeaderPopupEmail />}
      </BtnsStyle>
    </LayoutStyle>
  );
}
