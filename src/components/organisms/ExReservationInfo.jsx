import React from "react";
import { styled } from "styled-components";

const ReservationWrap = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    padding: 0;
    background-color: transparent;
  }
`;
const ReservationIn = styled.div`
  padding: 1rem 2rem;
  border-radius: 20px;
  width: 100%;
  background-color: #fefefe;

  > h4 {
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #ddd;
    font-size: 1rem;
    font-weight: 700;
  }

  strong {
    font-weight: 700;
  }

  > .reservation_details {
    font-size: 0.875rem;
    padding-top: 0.5rem;
    width: 100%;
    display: flex;

    > .price_info {
      display: flex;
      padding: 0.5rem;
      width: 50%;
      > strong {
        width: 100px;
      }
    }
    > .reservation_info {
      width: 50%;
      > div {
        display: flex;
        padding: 0.5rem 0.5rem 2rem 0.5rem;
        > strong {
          width: 100px;
        }
      }
      > div:first-child {
        border-bottom: 1px solid #eee;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0;

    > h4 {
    }
    > .reservation_details {
      flex-direction: column;

      > .price_info {
        width: 100%;
        padding-top: 0;
        padding-bottom: 2rem;
        border-bottom: 1px solid #ddd;
      }
      > .reservation_info {
        width: 100%;

        > div {
          padding: 0.5rem 0.5rem 2rem 0.5rem;
        }
        > div:first-child {
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
`;

export default function ExReservationInfo({ data }) {
  return (
    <>
      <ReservationWrap>
        <ReservationIn>
          <h4>예매정보</h4>
          <div className="reservation_details">
            <div className="price_info">
              <strong>티켓가격</strong>
              <p>가격정보</p>
            </div>
            <div className="reservation_info">
              <div>
                <strong>예매</strong>
                <p>예매링크</p>
              </div>
              <div>
                <strong>문의</strong>
                <p>문의연락처 등</p>
              </div>
            </div>
          </div>
        </ReservationIn>
      </ReservationWrap>
    </>
  );
}
