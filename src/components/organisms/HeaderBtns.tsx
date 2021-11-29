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
`;

const BtnsStyle = styled.div``;

export default function HeaderBtns({
  headerHover,
  setHeaderHover,
  headerClick,
}: {
  headerHover: HeaderHover;
  setHeaderHover: (key: string, value: boolean) => void;
  headerClick: HeaderClick;
}) {
  return (
    <LayoutStyle>
      <BtnsStyle>
        <BtnHeaderGitHub
          setHeaderHover={setHeaderHover}
          onClick={headerClick.githubLink}
        />
        {headerHover.githubLink && <HeaderPopupGithubLink />}
      </BtnsStyle>
      <BtnsStyle>
        <BtnHeaderCall
          setHeaderHover={setHeaderHover}
          onClick={headerClick.call}
        />
        {headerHover.call && <HeaderPopupCall />}
      </BtnsStyle>
      <BtnsStyle>
        <BtnHeaderEmail
          setHeaderHover={setHeaderHover}
          onClick={headerClick.email}
        />
        {headerHover.email && <HeaderPopupEmail />}
      </BtnsStyle>
    </LayoutStyle>
  );
}
