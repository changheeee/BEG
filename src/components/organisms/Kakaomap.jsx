import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import LoIngEx from "../molecules/LoIngEx";
import styled from "styled-components";
import Pagination from "../atoms/Pagination";

const { kakao } = window;

// 스타일링을 위한 Styled-components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MapContainer = styled.div`
  width: 40%;
  height: 400px;
  border: 1px solid #ccc;
`;
const MarkerStyle = styled.div`
  padding: 5px;
  font-size: 12px;
`;
const ListContainer = styled.div`
  padding: 0 1rem 1rem 1rem;
  width: 55%;
  height: 400px;

  .list_header {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 0.875fr 0.5fr;
    padding: 0 0.5rem 0.5rem 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    border-bottom: 1px solid #555;

    > li:last-child {
      text-align: right;
    }
  }

  .list_body {
  }
`;
const ListTr = styled.li`
  font-size: 0.875rem;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 0.875fr 0.5fr;
  border-bottom: 1px solid #ccc;
  padding: 0 0.5rem;

  > span {
    padding: 0.875rem 0;
  }
  .title_pointer {
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  }

  .detail_li {
    text-align: right;
  }

  .detail_btn {
    border: 1px solid #ccc;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    padding: 0.2rem 0.35rem;

    &:hover,
    :active {
      font-weight: 500;
      background-color: #f5f5f5;
    }
  }
`;

export default function Kakaomap() {
  // 현재 위치, 장소 목록, 키워드를 저장하는 상태
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [psList, setPsList] = useState([]);
  const [keyword, setKeyword] = useState("");

  // 컴포넌트가 마운트될 때 현재 위치를 가져오기 위한 메모이제이션된 함수
  useMemo(() => {
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

  // 위치가 변경될 때 실행되는 효과
  useEffect(() => {
    // 지도 초기화
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    // 현재 위치 마커 생성
    let markerPosition = new kakao.maps.LatLng(
      location.latitude,
      location.longitude
    );
    let marker = new kakao.maps.Marker({ position: markerPosition });

    // 카카오 맵 서비스 초기화
    let ps = new kakao.maps.services.Places(map);
    let infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

    // 현재 위치 마커 클릭 이벤트 설정
    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;text-align: center;">내위치</div>'
      );
      infowindow.open(map, marker);
    });

    // 장소 검색 및 마커 표시
    ps.categorySearch("CT1", placesSearchCB, { useMapBounds: true });

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 이전의 장소 목록에 새로운 장소 정보를 추가하여 업데이트
        setPsList(data.map((e) => [e.place_name, e.address_name, e.phone]));

        // 각 장소에 대한 마커 표시
        data.forEach(displayMarker);
      }
    }

    function displayMarker(place) {
      // 마커 생성 및 지도에 표시
      let markers = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 장소 정보 저장
      if (place.place_name.length) {
        setPsList((prevPsList) => [
          ...prevPsList,
          [place.place_name, place.address_name, place.phone],
        ]);
      }

      // 마커 클릭 이벤트 설정
      kakao.maps.event.addListener(markers, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;text-align: center;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, markers);
        console.log(place.place_name);
        setKeyword(place.place_name);
      });
    }

    // 현재 위치 마커 지도에 표시
    marker.setMap(map);
  }, [location]);
  console.log(psList);

  const clickKewordHandler = (e) => {
    setKeyword(e.target.innerText);
  };

  //페이지네이션 부분
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 7; // 한 페이지에 표시할 항목 수

  const pageCount = Math.ceil(psList.length / PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedList = psList.slice(
    currentPage * PER_PAGE,
    (currentPage + 1) * PER_PAGE
  );

  return (
    <>
      <Container>
        <MapContainer id="map" />

        <ListContainer>
          <ul className="list_header">
            <li>공간명</li>
            <li>주소</li>
            <li>전화번호</li>
            <li>상세정보</li>
          </ul>
          <ul className="list_body">
            {displayedList.map((v, index) => (
              <ListTr key={index}>
                <span
                  className="title_pointer"
                  onClick={(e) => {
                    clickKewordHandler(e);
                  }}
                >
                  {v[0]}
                </span>
                <span>{v[1]}</span>
                <span>{v[2]}</span>
                <span className="detail_li">
                  <Link to={`/lo_Detail/${v}`} className="detail_btn">
                    상세보기
                  </Link>
                </span>
              </ListTr>
            ))}
          </ul>
          {/* 페이지네이션 */}
          {pageCount > 0 && (
            <Pagination
              pageCount={Math.max(1, pageCount - 1)}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          )}
        </ListContainer>
      </Container>

      <LoIngEx keyword={keyword} />
    </>
  );
}
