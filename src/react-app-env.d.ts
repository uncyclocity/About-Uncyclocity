/// <reference types="react-scripts" />

// 헤더 3버튼의 hover 여부
type HeaderHover = {
  githubLink: boolean;
  call: boolean;
  email: boolean;
};

// 헤더 3버튼 클릭 시 작업
type HeaderClick = {
  githubLink: (e?: any) => void;
  call: (e?: any) => void;
  email: (e?: any) => void;
};

// 작품 페이지에서 각 작품의 깃허브 및 시연 링크
type WorkLinks = {
  gotoFrontRepo: () => void;
  gotoBackRepo: () => void;
  gotoWorkLink: () => void;
};
