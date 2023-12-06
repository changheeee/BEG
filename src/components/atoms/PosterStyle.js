import styled from "styled-components";
const aspectRatio = 459 / 326;

export const PosterMain = styled.div`
  width: 405px;
  height: ${405 * aspectRatio}px;
`;

export const PosterMainBest = styled.div`
  width: 326px;
  height: ${326 * aspectRatio}px;

  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 4px 6px 6px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const PosterExhibition = styled.div`
  width: 326px;
  height: 459px;

  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 4px 6px 6px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    transition: all 0.125s;
    scale: 1.015;
  }

  @media (max-width: 1200px) {
    border-radius: 0.3rem;

    width: 100px;
    height: ${100 * aspectRatio}px;

    &:hover {
      scale: unset;
    }
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

  border-radius: 0.3rem;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 4px 6px 6px 0px rgba(0, 0, 0, 0.12);

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
