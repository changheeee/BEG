import styled from "styled-components";
const aspectRatio = 459 / 326;

export const PosterMain = styled.div`
  width: 405px;
  height: ${405 * aspectRatio}px;
`;

export const PosterExhibition = styled.div`
  width: 326px;
  height: 459px;

  @media (max-width: 768px) {
    width: 100px;
    height: ${100 * aspectRatio}px;
  }
`;

export const PosterCommunity = styled.div``;

export const PosterLocation = styled.div``;
