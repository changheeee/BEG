import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../../MOCK_DATA.json";
import { MainContent } from "../atoms/SectionContent";

import LoIngEx from "../atoms/LoIngEx";

const PlaceDetailWrap = styled.div`
  .detail_info {
    position: relative;
    width: 100%;
    max-height: 600px;
    overflow: hidden;
    margin-bottom: 1rem;

    /* @media (max-width: 1200px) {
      max-height: auto;
    } */

    .detail_bg {
      width: 100%;
    }

    .description_box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 0;
      right: 0;
      width: 750px;
      height: 100%;
      padding: 3rem;
      background-color: #000000a1;
      color: #fefefe;

      .box_top {
        h3 {
          font-weight: 600;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        > span {
          font-size: 1.125rem;
        }
        > p {
          line-height: 1.2;
          margin-top: 1rem;
          font-size: 1rem;
        }
      }
      .box_bot {
        font-size: 0.875rem;

        > li {
          padding: 0.85rem 0;
          border-bottom: 0.5px solid #fefefeb1;

          > strong {
            font-weight: 600;
            margin-right: 2rem;
          }
          > span {
            font-weight: 400;
          }

          a {
            color: #fefefe;
          }
        }
      }
    }
  }
`;

export default function LocationDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  console.log(id);
  useEffect(() => {
    const foundData = MOCK_DATA.location.find((item) => item.place_nm === id);
    setData(foundData);
  }, [id]);

  if (!data) return null;

  const imageUrl = data.place_img;
  console.log(imageUrl);
  return (
    <PlaceDetailWrap>
      {/* <DetailContent>{data.place_nm}</DetailContent> */}
      <div className="detail_info">
        <img className="detail_bg" src={imageUrl} alt="" />
        <div className="description_box">
          <div className="box_top">
            <h3>{data.place_nm}</h3>
            <span>{data.place_adress}</span>
            <p>{data.place_description}</p>
          </div>
          <ul className="box_bot">
            <li>
              <strong>개관연도</strong>
              <span>{data.place_opened_year}년</span>
            </li>
            <li>
              <strong>공연장수</strong>
              <span>{data.place_venues}개</span>
            </li>
            <li>
              <strong>시설특성</strong>
              <span>{data.place_character}</span>
            </li>
            <li>
              <strong>수용인원</strong>
              <span>{data.place_capacity}명</span>
            </li>
            <li>
              <strong>전화번호</strong>
              <span>{data.place_call_number}</span>
            </li>
            <li>
              <strong>홈페이지</strong>
              <span>
                <a target="blank" href={data.place_homepage}>
                  바로가기
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <MainContent>
        <LoIngEx keyword={data.place_nm} />
      </MainContent>
    </PlaceDetailWrap>
  );
}
