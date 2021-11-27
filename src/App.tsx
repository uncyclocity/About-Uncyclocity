import { useState } from "react";
import { ThemeProvider } from "styled-components";
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

export default function App() {
  const [isStrong, setIsStrong] = useState<IsStrong>(initialIsStrong);

  return (
    <ThemeProvider theme={theme}>
      <TmplHeader />
      <Welcome />
      <TmplFooter isStrong={isStrong} />
    </ThemeProvider>
  );
}
