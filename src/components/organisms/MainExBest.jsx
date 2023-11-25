import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import MainBestList from "../molecules/MainBestList";

const MainExBestWrap = styled.div`
  width: 100%;

  .slick-list {
    padding-bottom: 5px;
  }
  .slick-slide > div {
    transition: all 2.25s;
    display: flex;
    justify-content: center;
    opacity: 0.5; /* 모든 슬라이드 항목에 투명도 50% 설정 */
    pointer-events: none; /* 모든 슬라이드 항목의 클릭 비활성화 */
  }
  .slick-current + .slick-slide > div {
    opacity: 1; /* 현재 슬라이드의 다음 항목에 투명도 100% 설정 */
    pointer-events: auto; /* 현재 슬라이드의 다음 항목의 클릭 활성화 */
  }

  @media (max-width: 1240px) {
    .slick-slide > div {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

export default function MainExBest({ data }) {
  const ExList = data.list;

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // 추가 옵션: 자동으로 슬라이드가 넘어감
    autoplaySpeed: 5000, // 추가 옵션: 슬라이드 간의 자동 재생 속도 (단위: 밀리초)
    pauseOnHover: true, // 마우스를 올렸을 때 오토플레이 멈춤
    responsive: [
      {
        breakpoint: 1240, // 태블릿 화면에서 적용될 설정
        settings: {
          slidesToShow: 2, // 태블릿 화면에서 2개씩 슬라이드 보이기
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // 모바일 화면에서 적용될 설정
        settings: {
          slidesToShow: 1, // 모바일 화면에서 1개씩 슬라이드 보이기
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MainExBestWrap>
      <Slider {...settings}>
        {ExList.map((item, index) => (
          <MainBestList key={index} item={item} />
        ))}
      </Slider>
    </MainExBestWrap>
  );
}
