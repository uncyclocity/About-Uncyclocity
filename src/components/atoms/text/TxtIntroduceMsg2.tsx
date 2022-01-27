import styled from "styled-components";
import "../../../styles/font.css";
import React from "react";

const NormalTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    align-items: center;
  }
`;

function TxtIntroduceMsg1() {
  return (
    <div>
      <NormalTextStyle>웹 프론트엔드 개발자를 준비중인</NormalTextStyle>
      <NormalTextStyle>SW 마이스터고 졸업생입니다.</NormalTextStyle>
      <NormalTextStyle>
        현재는 WEPLANET의 웹 프론트엔드 개발자로
      </NormalTextStyle>
      <NormalTextStyle>
        커리어를 시작하기 위한 준비 중에 있습니다.
      </NormalTextStyle>
      <br />
      <NormalTextStyle>
        항상 시간이 남을 때마다 제가 좋아하는 기술을 다룹니다.
      </NormalTextStyle>
      <NormalTextStyle>
        저는 이전부터 Front-End 분야에 큰 관심이 생겨
      </NormalTextStyle>
      <NormalTextStyle>꾸준히 학습하고 이를 정리해왔으며</NormalTextStyle>
      <NormalTextStyle>
        React와 Next.js를 통해 다양한 프로젝트를 진행해왔습니다.
      </NormalTextStyle>
      <br />
      <NormalTextStyle>
        향후 Front-End 시니어 개발자의 꿈을 실현시키기 위해
      </NormalTextStyle>
      <NormalTextStyle>
        새로운 배움에 대해 항상 적극적으로 임하고자 합니다.
      </NormalTextStyle>
    </div>
  );
}

export default React.memo(TxtIntroduceMsg1);
