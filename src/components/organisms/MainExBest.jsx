import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import MainBestList from "../molecules/MainBestList";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

const MainExBestWrap = styled.div`
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

export default function MainExBest({ data }) {
  const ExList = data.list
    .sort((a, b) => b.bookmarked - a.bookmarked)
    .slice(0, 10);

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
    <MainExBestWrap>
      <Slider ref={sliderRef} {...settings}>
        {ExList.map((item, index) => (
          <MainBestList key={index} item={item} ranking={index + 1} />
        ))}
      </Slider>
    </MainExBestWrap>
  );
}
