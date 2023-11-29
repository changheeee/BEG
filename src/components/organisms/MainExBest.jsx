import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import MainBestList from "../molecules/MainBestList";

const MainExBestWrap = styled.div`
  width: 100%;

  .slick-list {
  }

  .slick-current {
    padding-bottom: 15px;
  }
  .slick-slide > div {
    position: relative;
    display: flex;
    justify-content: center;
  }

  /* .slick-current + .slick-slide + .slick-slide > div {
  } */
`;

export default function MainExBest({ data }) {
  // 북마크 숫자를 기준으로 데이터를 내림차순 정렬하고, 상위 10개만 선택합니다.
  const ExList = data.list
    .sort((a, b) => b.bookmarked - a.bookmarked)
    .slice(0, 10);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false, // 추가 옵션: 자동으로 슬라이드가 넘어감
    autoplaySpeed: 5000, // 추가 옵션: 슬라이드 간의 자동 재생 속도 (단위: 밀리초)
    pauseOnHover: true, // 마우스를 올렸을 때 오토플레이 멈춤
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1840,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1240, // 태블릿 화면에서 적용될 설정
        settings: {
          slidesToShow: 2, // 태블릿 화면에서 2개씩 슬라이드 보이기
          slidesToScroll: 2,
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
          <>
            <MainBestList key={index} item={item} ranking={index + 1} />
          </>
        ))}
      </Slider>
    </MainExBestWrap>
  );
}
