import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";

const MyLocationWrap = styled.div`
  margin-left: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
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
            // Kakao Map Geocoding API 호출
            const response = await axios.get(
              `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
              {
                headers: {
                  Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_MAP_REST_API}`,
                },
              }
            );

            // API 응답에서 주소 추출
            let address = response.data.documents[0].address.address_name;

            setUserLocation({ latitude, longitude, address });
          } catch (error) {
            console.error("Error getting user location:", error.message);
          }
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
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
            // onClick={getUserLocation}
          />
        </MyLocationWrap>
      )}
    </>
  );
}
