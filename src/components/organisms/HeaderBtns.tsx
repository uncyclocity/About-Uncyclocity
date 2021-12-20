import { AiTwotoneMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import styled from "styled-components";
import BtnHeader from "../atoms/button/BtnHeader";
import { useSampleState } from "../context/pageContext";
import HeaderPopupCall from "../molecules/HeaderPopupCall";
import HeaderPopupEmail from "../molecules/HeaderPopupEmail";
import HeaderPopupGithubLink from "../molecules/HeaderPopupGithubLink";

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
  const { mQuery } = useSampleState();

  return (
    <LayoutStyle>
      <BtnsStyle>
        {mQuery ? (
          <BtnHeader
            setHeaderHover={setHeaderHover}
            onClick={headerClickMobile.githubLink}
            btnKind="githubLink"
            icon={<BsGithub />}
          />
        ) : (
          <BtnHeader
            setHeaderHover={setHeaderHover}
            onClick={headerClick.githubLink}
            btnKind="githubLink"
            icon={<BsGithub />}
          />
        )}
        {headerHover.githubLink && <HeaderPopupGithubLink />}
      </BtnsStyle>
      <BtnsStyle>
        {mQuery ? (
          <BtnHeader
            setHeaderHover={setHeaderHover}
            onClick={headerClickMobile.call}
            btnKind="call"
            icon={<IoIosCall />}
          />
        ) : (
          <BtnHeader
            setHeaderHover={setHeaderHover}
            onClick={headerClick.call}
            btnKind="call"
            icon={<IoIosCall />}
          />
        )}
        {headerHover.call && <HeaderPopupCall />}
      </BtnsStyle>
      <BtnsStyle>
        {mQuery ? (
          <BtnHeader
            setHeaderHover={setHeaderHover}
            onClick={headerClickMobile.email}
            btnKind="email"
            icon={<AiTwotoneMail />}
          />
        ) : (
          <BtnHeader
            setHeaderHover={setHeaderHover}
            onClick={headerClick.email}
            btnKind="email"
            icon={<AiTwotoneMail />}
          />
        )}
        {headerHover.email && <HeaderPopupEmail />}
      </BtnsStyle>
    </LayoutStyle>
  );
}
