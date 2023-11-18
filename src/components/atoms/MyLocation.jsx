import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";

const MyLocationWrap = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #888;
  letter-spacing: -0.04rem;
`;
const MyLocationIcon = styled.img`
  margin-left: 0.2rem;
  height: 0.65rem;
  cursor: pointer;
`;

export default function MyLocation() {
  const [userLocation, setUserLocation] = useState(null);

  const getUserLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            // 구글 맵 Geocoding API 호출
            const response = await axios.get(
              //key뒤에 api키 붙여야함 나중에는 따로 관리
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=`,
            );

            // API 응답에서 주소 추출
            let address = response.data.results[0].formatted_address;

            // '대한민국'과 '515'를 제외한 중간 부분 추출
            address = address.split(" ").slice(1, -1).join(" ");

            setUserLocation({ latitude, longitude, address });
          } catch (error) {
            console.error("Error getting user location:", error.message);
          }
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  return (
    <>
      {userLocation && (
        <MyLocationWrap>
          {userLocation.address}
          <MyLocationIcon
            src="/images/ico_location_arrow.svg"
            onClick={getUserLocation}
          />
        </MyLocationWrap>
      )}
    </>
  );
}
