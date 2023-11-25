import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "styled-components";

const MainCarouselWrap = styled.div`
  height: auto;
  position: relative;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    height: 100%;
    background-color: #eee;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .carousel .dot {
    width: 10px;
    height: 10px;
    background-color: #555;
    box-shadow: none;
  }
  .carousel .selected {
    background-color: #fefefe;
  }
`;

export default function MainCarousel() {
  return (
    <MainCarouselWrap>
      <Carousel
        showThumbs={false} // 썸네일(썸네일은 아래에 작은 이미지로 슬라이드 표시)
        autoPlay={false} // 자동 슬라이드
        infiniteLoop={true} // 끝 페이지에서 첫 페이지로 반복
        interval={5000} // 각 슬라이드 간의 시간 간격 (밀리초)
        showStatus={false} // 현재 위치 상태를 보여줄 것인지 여부
        showArrows={true} // 좌우 화살표 표시 여부
        //showIndicators={false} // 슬라이드 위치를 나타내는 인디케이터 표시 여부
        emulateTouch={true} // 터치 이벤트 모방 (모바일 디바이스에서 스와이프 기능 활성화)
        dynamicHeight={true} // 슬라이드의 동적 높이 사용 여부
        useKeyboardArrows={false} // 키보드 화살표 사용 여부
        stopOnHover={true} // 마우스 호버 시 자동 슬라이드 일시 중지
      >
        <div className="item">
          <img src="/images/bg_main_1.png" alt="" />
        </div>
        <div className="item">
          <img src="/images/bg_main_1.png" alt="" />
        </div>
        <div className="item">
          <img src="/images/bg_main_1.png" alt="" />
        </div>
        <div className="item">
          <img src="/images/bg_main_1.png" alt="" />
        </div>
      </Carousel>
    </MainCarouselWrap>
  );
}
