import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useSampleDispatch } from "./components/context/pageContext";
import ReadyNow from "./components/pages/ReadyNow";
import Welcome from "./components/pages/Welcome";
import TmplFooter from "./components/templates/TmplFooter";
import TmplHeader from "./components/templates/TmplHeader";
import { theme } from "./styles/theme";

export default function App() {
  const [isStrong, setIsStrong] = useState<number>(0);
  const outerDivRef = useRef<HTMLDivElement>(null);
  const dispatch = useSampleDispatch();
  let timer: NodeJS.Timeout;

  const pageChange = (e: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      e.preventDefault();
      const { deltaY } = e;
      if (deltaY > 0 && isStrong < 4) {
        dispatch({ type: "SET_ANIMATION", state: true });
        setTimeout(() => {
          dispatch({ type: "SET_ANIMATION", state: false });
          setIsStrong(isStrong + 1);
        }, 250);
      } else if (deltaY < 0 && isStrong > 0) {
        dispatch({ type: "SET_ANIMATION", state: true });
        setTimeout(() => {
          dispatch({ type: "SET_ANIMATION", state: false });
          setIsStrong(isStrong - 1);
        }, 250);
      }
    }, 100);
  };

  useEffect(() => {
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener("wheel", pageChange);
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", pageChange);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <TmplHeader />
      <div ref={outerDivRef} className="outer">
        {isStrong === 0 && <Welcome />}
        {isStrong === 1 && <ReadyNow />}
        {isStrong === 2 && <ReadyNow />}
        {isStrong === 3 && <ReadyNow />}
        {isStrong === 4 && <ReadyNow />}
      </div>
      <TmplFooter isStrong={isStrong} />
    </ThemeProvider>
  );
}
