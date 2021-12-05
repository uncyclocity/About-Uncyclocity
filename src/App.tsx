import { useCallback, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import {
  useSampleDispatch,
  useSampleState,
} from "./components/context/pageContext";
import useSnackBar from "./components/etc/useSnackBar";
import SnackBar from "./components/organisms/SnackBar";
import Introduce from "./components/pages/Introduce";
import Profile from "./components/pages/Profile";
import Skills from "./components/pages/Skills";
import Welcome from "./components/pages/Welcome";
import Works from "./components/pages/Works";
import TmplFooter from "./components/templates/TmplFooter";
import TmplHeader from "./components/templates/TmplHeader";
import { theme } from "./styles/theme";

export default function App() {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const {
    nowSlide,
    headerHover,
  }: { nowSlide: number; headerHover: HeaderHover } = useSampleState();
  const dispatch = useSampleDispatch();
  const timer = useRef<any>(null);
  const {
    viewText,
    setViewText,
  }: { viewText: string; setViewText: (text: string) => void } = useSnackBar();

  const pageChangeworks = useCallback(
    (slideNum: number) => {
      dispatch({ type: "SET_ANIMATION", state: true });
      setTimeout(() => {
        dispatch({ type: "SET_ANIMATION", state: false });
        dispatch({ type: "SET_NOWSLIDE", state: slideNum });
      }, 250);
    },
    [dispatch]
  );

  const toSetEnablePageChange = () => {
    clearTimeout(timer.current);
    timer.current = null;
  };

  const pageChange = useCallback(
    (e: any) => {
      if (!timer.current) {
        e.preventDefault();
        const { deltaY } = e;
        if (deltaY > 0 && nowSlide < 4) {
          pageChangeworks(nowSlide + 1);
        } else if (deltaY < 0 && nowSlide > 0) {
          pageChangeworks(nowSlide - 1);
        }
        timer.current = setTimeout(() => {
          toSetEnablePageChange();
        }, 250);
      } else {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          toSetEnablePageChange();
        }, 250);
      }
    },
    [nowSlide, pageChangeworks]
  );

  const setHeaderHover = (key: string, value: boolean) => {
    dispatch({ type: "SET_HOVER", key, value });
  };

  const headerClick: HeaderClick = {
    githubLink: () => {
      const githubUrl = "https://github.com/uncyclocity";
      window.open(githubUrl, "_blank");
    },
    call: () => {
      const phoneNum = "+82 10-2610-3861";
      navigator.clipboard.writeText(phoneNum);
      setViewText("클립보드에 복사되었습니다.");
    },
    email: () => {
      const emailUrl = "seongbeom_lee@kakao.com";
      navigator.clipboard.writeText(emailUrl);
      setViewText("클립보드에 복사되었습니다.");
    },
  };

  const headerClickMobile: HeaderClick = {
    githubLink: (e) => {
      const ref = e.target;
      setHeaderHover("githubLink", true);
      ref.addEventListener("click", headerClick.githubLink);
      setTimeout(() => {
        setHeaderHover("githubLink", false);
        ref.removeEventListener("click", headerClick.githubLink);
      }, 2000);
    },
    call: (e: any) => {
      const ref = e.target;
      setHeaderHover("call", true);
      ref.addEventListener("click", headerClick.call);
      setTimeout(() => {
        setHeaderHover("call", false);
        ref.removeEventListener("click", headerClick.call);
      }, 2000);
    },
    email: (e: any) => {
      const ref = e.target;
      setHeaderHover("email", true);
      ref.addEventListener("click", headerClick.email);
      setTimeout(() => {
        setHeaderHover("email", false);
        ref.removeEventListener("click", headerClick.email);
      }, 2000);
    },
  };

  useEffect(() => {
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener("wheel", pageChange);
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", pageChange);
    };
  }, [pageChange]);

  return (
    <ThemeProvider theme={theme}>
      <TmplHeader
        headerHover={headerHover}
        setHeaderHover={setHeaderHover}
        headerClick={headerClick}
        headerClickMobile={headerClickMobile}
      />
      <div ref={outerDivRef} className="outer">
        {nowSlide === 0 && <Welcome />}
        {nowSlide === 1 && <Profile />}
        {nowSlide === 2 && <Introduce />}
        {nowSlide === 3 && <Skills />}
        {nowSlide === 4 && <Works />}
        {viewText && <SnackBar text={viewText} />}
      </div>
      <TmplFooter nowSlide={nowSlide} onClick={pageChangeworks} />
    </ThemeProvider>
  );
}
