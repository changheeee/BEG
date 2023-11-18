import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #ccc;
`;

export default function GoogleMap() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // 위치 정보를 가져오는 함수
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting user location:", error.message);
          },
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    // 위치 정보 가져오기
    getUserLocation();
  }, []);

  return (
    <MapContainer>
      {userLocation && (
        <iframe
          title="User Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}&output=embed`}
          allowFullScreen
        />
      )}
    </MapContainer>
  );
}
