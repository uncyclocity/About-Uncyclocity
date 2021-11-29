import { useCallback, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import {
  useSampleDispatch,
  useSampleState,
} from "./components/context/pageContext";
import ReadyNow from "./components/pages/ReadyNow";
import Welcome from "./components/pages/Welcome";
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
  const timer = useRef(setTimeout(() => {}, 0));

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

  const pageChange = useCallback(
    (e: any) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        e.preventDefault();
        const { deltaY } = e;
        if (deltaY > 0 && nowSlide < 4) {
          pageChangeworks(nowSlide + 1);
        } else if (deltaY < 0 && nowSlide > 0) {
          pageChangeworks(nowSlide - 1);
        }
      }, 100);
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
    },
    email: () => {
      const emailUrl = "seongbeom_lee@kakao.com";
      navigator.clipboard.writeText(emailUrl);
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
      <div ref={outerDivRef} className="outer">
        {nowSlide === 0 && <Welcome />}
        {nowSlide === 1 && <ReadyNow />}
        {nowSlide === 2 && <ReadyNow />}
        {nowSlide === 3 && <ReadyNow />}
        {nowSlide === 4 && <ReadyNow />}
      </div>
      <TmplHeader
        headerHover={headerHover}
        setHeaderHover={setHeaderHover}
        headerClick={headerClick}
      />
      <TmplFooter nowSlide={nowSlide} onClick={pageChangeworks} />
    </ThemeProvider>
  );
}
