/// <reference types="react-scripts" />

// 헤더 3버튼의 hover 여부
type HeaderHover = {
  githubLink: boolean;
  call: boolean;
  email: boolean;
};

// 헤더 3버튼 클릭 시 작업
type HeaderClick = {
  githubLink: () => void;
  call: () => void;
  email: () => void;
};
