import styled from "styled-components";
const aspectRatio = 459 / 326;

export const PosterMain = styled.div`
  width: 405px;
  height: ${405 * aspectRatio}px;
`;

export const PosterMainBest = styled.div`
  width: 326px;
  height: ${326 * aspectRatio}px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const PosterExhibition = styled.div`
  width: 326px;
  height: 459px;

  @media (max-width: 1200px) {
    width: 100px;
    height: ${100 * aspectRatio}px;
  }
`;

export const PosterCommunityBest = styled.div`
  width: 100px;
  height: ${100 * aspectRatio}px;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const PosterMainCalendar = styled.div`
  width: 100px;
  height: ${100 * aspectRatio}px;

  @media (max-width: 1200px) {
    /* width: 120px;
    height: auto; */
  }
  /* @media (max-width: 768px) {
    width: 100%;
    height: auto;
  } */
`;

export const PosterLocation = styled.div``;
