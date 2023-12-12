import React, { useState, useEffect, useMemo } from "react";
import { Container, MapContainer } from "../atoms/LocationContent";
import LocationList from "../molecules/LocationList";

export default function Kakaomap() {
  // 현재 위치를 저장하는 state
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  // 검색 키워드를 저장하는 state
  const [keyword, setKeyword] = useState("");

  // 장소 목록을 저장하는 state
  const [psList, setPsList] = useState([]);

  // 최초 렌더링 시 사용자의 현재 위치를 얻어오는 useEffect
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setLocation({
        latitude: 33.450701,
        longitude: 126.902435,
      });
      console.log("위치 받기 실패");
    }
  }, [navigator.geolocation.getCurrentPosition]);

  // useEffect를 사용하여 지도 및 마커 초기화
  useEffect(() => {
    console.log(psList);
    const container = document.getElementById("map");

    if (container) {
      const options = {
        center: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude
        ),
        level: 6,
        // draggable: false,
      };

      const map = new window.kakao.maps.Map(container, options);

      let markerPosition = new window.kakao.maps.LatLng(
        location.latitude,
        location.longitude
      );

      let marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: new window.kakao.maps.MarkerImage(
          "/images/marker_red.svg",
          new window.kakao.maps.Size(30, 30),
          {
            offset: new window.kakao.maps.Point(20, 40),
          }
        ),
      });

      let ps = new window.kakao.maps.services.Places(map);
      let infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

      // 현재 위치 마커에 대한 이벤트 처리
      window.kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.setContent(
          '<div style="display:flex; justify-content:center;padding:5px;font-size:12px;">내위치</div>'
        );
        infowindow.open(map, marker);
      });

      // 카테고리 검색 및 마커 표시
      ps.categorySearch("CT1", placesSearchCB, { useMapBounds: true });

      function placesSearchCB(data, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색 결과를 초기화하고 유일한 값만 추가
          setPsList((prevPsList) => {
            const newPsList = data.map((e) => [
              e.place_name,
              e.address_name,
              e.phone,
            ]);
            const uniquePsList = Array.from(new Set(newPsList));
            return uniquePsList;
          });
          data.forEach(displayMarker);
        }
      }

      function displayMarker(place) {
        let markers = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
          image: new window.kakao.maps.MarkerImage(
            "/images/marker_blue.svg",
            new window.kakao.maps.Size(30, 30),
            {
              offset: new window.kakao.maps.Point(20, 40),
            }
          ),
        });

        // if (place.place_name.length) {
        //   setPsList((prevPsList) => [
        //     ...prevPsList,
        //     [place.place_name, place.address_name, place.phone],
        //   ]);
        // }

        // 마커에 대한 이벤트 처리
        window.kakao.maps.event.addListener(markers, "mouseover", function () {
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, markers);
        });

        window.kakao.maps.event.addListener(markers, "click", function () {
          setKeyword(place.place_name);
          console.log(place);
        });
      }

      marker.setMap(map);
    }
  }, [location]);

  return (
    <>
      <Container>
        <MapContainer id="map" />
        <LocationList
          psList={psList}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </Container>
    </>
  );
}
