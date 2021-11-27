import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import ReadyNow from "./components/pages/ReadyNow";
import Welcome from "./components/pages/Welcome";
import TmplFooter from "./components/templates/TmplFooter";
import TmplHeader from "./components/templates/TmplHeader";
import { theme } from "./styles/theme";

type IsStrong = {
  welcome: boolean;
  profile: boolean;
  introduce: boolean;
  skills: boolean;
  works: boolean;
};

const initialIsStrong: IsStrong = {
  welcome: true,
  profile: false,
  introduce: false,
  skills: false,
  works: false,
};

const isStrongKey: string[] = [
  "welcome",
  "profile",
  "introduce",
  "skills",
  "works",
];

export default function App() {
  const [isStrong, setIsStrong] = useState<IsStrong>(initialIsStrong);
  const outerDivRef = useRef<HTMLDivElement>(null);

  const pageChange = () => {
    const outerDivRefCurrent = outerDivRef.current;

    const pageChangeWorks = (page: number, pageHeight: number): void => {
      const allFalseIsStrong: IsStrong = {
        welcome: false,
        profile: false,
        introduce: false,
        skills: false,
        works: false,
      };
      setIsStrong({
        ...allFalseIsStrong,
        [isStrongKey[page]]: true,
      });
      outerDivRefCurrent?.scrollTo({
        top: pageHeight * page,
        left: 0,
        behavior: "smooth",
      });
    };

    const wheelHandler = (e: any) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop }: any = outerDivRefCurrent;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        if (scrollTop < pageHeight) {
          pageChangeWorks(1, pageHeight);
        } else if (scrollTop < pageHeight * 2) {
          pageChangeWorks(2, pageHeight);
        } else if (scrollTop < pageHeight * 3) {
          pageChangeWorks(3, pageHeight);
        } else if (scrollTop < pageHeight * 4) {
          pageChangeWorks(4, pageHeight);
        }
      } else {
        if (scrollTop <= pageHeight) {
          pageChangeWorks(0, pageHeight);
        } else if (scrollTop <= pageHeight * 2) {
          pageChangeWorks(1, pageHeight);
        } else if (scrollTop <= pageHeight * 3) {
          pageChangeWorks(2, pageHeight);
        } else if (scrollTop <= pageHeight * 4) {
          pageChangeWorks(3, pageHeight);
        }
      }
    };
    outerDivRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  };

  useEffect(() => {
    pageChange();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <TmplHeader />
      <div ref={outerDivRef} className="outer">
        <Welcome />
        <ReadyNow />
        <ReadyNow />
        <ReadyNow />
        <ReadyNow />
      </div>
      <TmplFooter isStrong={isStrong} />
    </ThemeProvider>
  );
}
