import React, { useRef } from "react";
import { useRecoilValue } from "recoil"; // Recoil 훅 추가

import Slider from "react-slick";
import { styled } from "styled-components";
import MainExList from "../molecules/MainExList";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { fetchListState } from "../../stores/recoilState"; // fetchListState import

const Arrow = styled.div`
  display: flex;
  position: absolute;
  color: #aaa;
  top: 37%;
  z-index: 10; // arrow가 다른 요소 위에 올려지도록 z-index 추가
  ${(props) => (props.direction === "right" ? `right: -40px;` : `left: -40px;`)}
  height: 40px;
  width: 40px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainExWrap = styled.div`
  position: relative;

  .slick-current {
    padding-bottom: 15px;
  }
  .slick-slide > div {
    position: relative;
    display: flex;
    justify-content: center;
  }
`;

const SliderArrow = ({ direction, onClick }) => (
  <Arrow onClick={onClick} direction={direction}>
    {direction === "left" ? (
      <IoIosArrowBack size={30} />
    ) : (
      <IoIosArrowForward size={30} />
    )}
  </Arrow>
);

export default function MainNowEx() {
  const data = useRecoilValue(fetchListState); // Recoil에서 데이터 가져오기
  console.log(data);

  // 오늘 날짜를 구합니다.
  const today = new Date();

  // 현재 진행 중인 공연만 필터링합니다.
  const ongoingExList = data.filter(
    (item) => new Date(item.start) <= today && new Date(item.end) >= today
  );

  // 종료일자가 짧은 순으로 정렬합니다.
  ongoingExList.sort(
    (a, b) => new Date(a.end).getTime() - new Date(b.end).getTime()
  );

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: (
      <SliderArrow
        direction="left"
        onClick={() => sliderRef.current.slickPrev()}
      />
    ),
    nextArrow: (
      <SliderArrow
        direction="right"
        onClick={() => sliderRef.current.slickNext()}
      />
    ),
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
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MainExWrap>
      <Slider ref={sliderRef} {...settings}>
        {ongoingExList.map((item, index) => (
          <MainExList key={index} item={item} />
        ))}
      </Slider>
    </MainExWrap>
  );
}